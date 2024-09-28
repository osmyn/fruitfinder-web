"use server";
import { signOut } from "@/auth";
import Button from "../Button";

export default async function SignoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}
