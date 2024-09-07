import NextAuth from "next-auth";
import "next-auth/jwt";
import AzureB2C from "next-auth/providers/azure-ad-b2c";
import { createStorage } from "unstorage";
import vercelKVDriver from "unstorage/drivers/vercel-kv";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import type { NextAuthConfig } from "next-auth";

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
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.sessionToken = token.accessToken;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
