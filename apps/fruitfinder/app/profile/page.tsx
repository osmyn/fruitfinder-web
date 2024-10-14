import { auth } from "@/auth";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage: React.FC = async () => {
  const session = await auth();
  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Header />
      {!session ? (
        <p>Access Denied</p>
      ) : (
        <div>
          <h1>Profile Page</h1>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
