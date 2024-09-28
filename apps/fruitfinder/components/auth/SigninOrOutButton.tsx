import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import { auth } from "@/auth";

export default async function SigninOrOutButton() {
  const session1 = await auth();
  const loggedIn = !!session1?.user;
  return <>{loggedIn ? <SignoutButton /> : <SigninButton />}</>;
}
