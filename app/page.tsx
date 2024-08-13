import Navigation from "@/components/Navigation";
import Content from "@/components/Content";
import SigninOrOutButton from "@/components/auth/SigninButton";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <Navigation>
        <SigninOrOutButton />{" "}
      </Navigation>

      <Content session={session} />
    </>
  );
}
