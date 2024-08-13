import Header from "@/components/Header";
import Content from "@/components/Content";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Content session={session} />
      </main>
    </>
  );
}
