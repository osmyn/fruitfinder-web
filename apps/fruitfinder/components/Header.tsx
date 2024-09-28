import SigninOrOutButton from "./auth/SigninOrOutButton";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div
      className="flex justify-between py-6 px-10 relative mr-7 z-10 items-start"
      data-testid="navbar"
    >
      <Navigation />

      <div className="hidden lg:flex items-center">
        <SigninOrOutButton />
      </div>
    </div>
  );
}
