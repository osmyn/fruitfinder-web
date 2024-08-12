import NextAuth from "next-auth";
import "next-auth/jwt";
import AzureB2C from "next-auth/providers/azure-ad-b2c";

import { createStorage } from "unstorage";
import memoryDriver from "unstorage/drivers/memory";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import type { NextAuthConfig } from "next-auth";

const storage = createStorage({
  driver: memoryDriver(),
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
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
