import type { Metadata } from "next";
import Header from "@/components/Header";
import { fetchFruitsGraphql } from "@/lib/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "All Fruits",
};

export default async function FruitsPage() {
  const gql = await fetchFruitsGraphql();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 align-top">
        <div className="flex items-center py-4">
          <DataTable columns={columns} data={gql.items} />
        </div>
      </main>
    </>
  );
}
