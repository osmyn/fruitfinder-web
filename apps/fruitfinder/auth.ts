import NextAuth from "next-auth";
import "next-auth/jwt";
import AzureB2C from "next-auth/providers/azure-ad-b2c";
import { createStorage } from "unstorage";
import vercelKVDriver from "unstorage/drivers/vercel-kv";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import type { NextAuthConfig } from "next-auth";
import { createUser, type User } from "./actions/action";

const storage = createStorage({
  driver: vercelKVDriver({
    url: process.env.KV_REST_API_URL, // KV_REST_API_URL
    token: process.env.KV_REST_API_TOKEN, // KV_REST_API_TOKEN
    base: "App",
    env: "KV",
    ttl: 60 * 60, // in seconds
  }),
});

const config = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  adapter: UnstorageAdapter(storage),
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  providers: [
    AzureB2C({
      clientId: process.env.AUTH_AZURE_AD_B2C_ID,
      clientSecret: process.env.AUTH_AZURE_AD_B2C_SECRET,
      authorization: process.env.AUTH_AZURE_AD_B2C_AUTHORIZATION,
      primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
      token: process.env.AUTH_AZURE_AD_B2C_TOKEN,
      issuer: process.env.AUTH_AZURE_AD_B2C_ISSUER,
    }),
  ],
  basePath: "/auth",
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    async signIn({ account, user, profile, email, credentials }) {
      if ((profile?.newUser as boolean) ?? false) {
        const emails: Array<string> = (profile?.emails as Array<string>) ?? [];
        const newUser: User = {
          name: profile?.name ?? "Unknown",
          email: emails[0],
          oid: (profile?.oid as string) ?? "",
          zipCode: (profile?.postalCode as string) ?? "",
        };
        const result = await createUser(newUser);
        console.log("Create User Result", result);
        return result.success;
      }
      return true;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith("/profile");
      if (isOnProfile) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/profile", nextUrl));
      }
      return true;
    },
    session({ session, token }) {
      console.log("Session Callback", session, token);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // This isn't getting called...
      console.log("JWT Callback", token, user, account, profile);
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    oid?: string;
    accessToken?: string;
    email?: string;
    isNewUser?: boolean;
    zipCode?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
