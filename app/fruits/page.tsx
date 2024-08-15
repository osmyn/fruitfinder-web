import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "All Fruits",
};

export default async function FruitsPage() {
  const base = process.env.API_BASE_URL;
  const url = `${base}/accounts`;
  const response = await fetch(url);
  const data = await response.json();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Fruits Page</h1>
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
