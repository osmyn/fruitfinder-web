import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import Azure_Active_Directory_B2C from "next-auth/providers/azure-ad-b2c";
import { z } from "zod";
import type { User } from "@/lib/interfaces";

async function getUser(email: string): Promise<User | undefined> {
  const user: User = {
    id: "1",
    name: "Test User",
    email,
    password: "$2b$10$1Q",
  };
  return user;
}

// TODO: setup OAuth https://authjs.dev/getting-started/authentication/oauth or Email https://authjs.dev/getting-started/authentication/email

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Azure_Active_Directory_B2C({
      clientId: process.env.AUTH_AZURE_AD_B2C_ID,
      clientSecret: process.env.AUTH_AZURE_AD_B2C_SECRET,
      // issuer: process.env.AUTH_AZURE_AD_B2C_ISSUER,
    }),
  ],
});
