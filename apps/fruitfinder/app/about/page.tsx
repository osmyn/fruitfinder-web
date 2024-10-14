import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Fruit Finder",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>About Page</h1>
      </main>
    </>
  );
};

export default AboutPage;
