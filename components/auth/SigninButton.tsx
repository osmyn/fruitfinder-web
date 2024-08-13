"use server";
import { signIn } from "@/auth";
import Button from "../Button";

export default async function SigninButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("azure-ad-b2c");
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}
