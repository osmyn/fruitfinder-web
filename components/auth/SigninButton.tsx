"use server";
import { signIn } from "@/auth";
import Button from "../Button";

export async function SigninButton() {
  return (
    <form
      action={async () => {
        await signIn("azure-ad-b2c");
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  );
}
