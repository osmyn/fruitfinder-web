import type { Metadata } from "next";
import Header from "@/components/Header";
import { fetchFruits, fetchFruitsGraphql } from "@/lib/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "All Fruits",
};

export default async function FruitsPage() {
  const fruits = await fetchFruits();
  const gql = await fetchFruitsGraphql();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 align-top">
        <div>
          <h2>Graph QL</h2>
          <p>{JSON.stringify(gql)}</p>
        </div>
        <div>
          <h2>REST</h2>
          <p></p>
        </div>
        <div className="flex items-center py-4">
          <DataTable columns={columns} data={fruits} />
        </div>
      </main>
    </>
  );
}
