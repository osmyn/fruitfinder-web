import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage: React.FC = () => {
  return (
    <>
      <Navigation>
        <h3>Hi</h3>
      </Navigation>
      <div>
        <h1>Profile Page</h1>
      </div>
    </>
  );
};

export default ProfilePage;
