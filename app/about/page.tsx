import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "About Fruit Finder",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>About Page</h1>
      </div>
    </>
  );
};

export default AboutPage;
