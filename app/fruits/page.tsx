import type { Metadata } from "next";
import Header from "@/components/Header";
import { fetchFruits } from "@/lib/data";
import { Fruit, columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "All Fruits",
};

export default async function FruitsPage() {
  const data = await fetchFruits();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 align-top">
        <div className="flex items-center py-4">
          <DataTable columns={columns} data={data as Fruit[]} />
        </div>
      </main>
    </>
  );
}
