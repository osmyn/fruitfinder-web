import Content from "@/components/Content";
import { auth } from "@/auth";

export default async function Debug() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Content session={session} />
    </main>
  );
}
