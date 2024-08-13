"use server";
import { auth } from "@/auth";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";

export default async function SigninOrOutButton() {
  const session = await auth();
  const loggedIn = !!session?.user;
  console.log(`Session: ${JSON.stringify(session, null, 2)}`);

  return <>{loggedIn ? <SigninButton /> : <SignoutButton />}</>;
}
