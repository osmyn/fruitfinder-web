import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
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

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = password === "$2b$10$1Q";

          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
