import type { NextAuthConfig } from "next-auth";
import Azure_Active_Directory_B2C from "next-auth/providers/azure-ad-b2c";

// const callbackUrl = process.env.AUTH_AZURE_AD_B2C_CALLBACK_URL;

export const authConfig = {
  pages: {
    signIn: "/signup",
    signOut: "/signout",
  },
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
  },
  providers: [Azure_Active_Directory_B2C],
} satisfies NextAuthConfig;
