import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "All Fruits",
};

const FruitsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Fruits Page</h1>
      </main>
    </>
  );
};

export default FruitsPage;
