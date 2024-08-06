import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "All Fruits",
};

const FruitsPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Fruits Page</h1>
      </div>
    </>
  );
};

export default FruitsPage;
