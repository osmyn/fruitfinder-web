import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Fruit Finder
        </h1>
        <Image
          src="/logo.png"
          alt="Fruit Finder logo"
          width={200}
          height={200}
        />
        <p className="text-center">
          Discover the freshest local fruit in your area with Fruit Finder. Add
          and read fruit freshness reviews to see what&apos;s currently in
          season and ripe near you.
        </p>
      </main>
    </>
  );
}
