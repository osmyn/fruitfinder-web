"use client";
import Image from "next/image";
import type { Session } from "next-auth";

export default function Content({ session }: { session: Session | null }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">
        Welcome to Fruit Finder
      </h1>
      <Image src="/logo.png" alt="Fruit Finder logo" width={200} height={200} />
      <p className="text-center">
        Discover the freshest local fruit in your area with Fruit Finder. Add
        and read fruit freshness reviews to see what&apos;s currently in season
        and ripe near you.
      </p>
      <div className="flex flex-col gap-4 p-4 w-full rounded-md">
        {session?.user ? (
          <>
            <h2 className="text-xl font-bold">Current Session Data</h2>
            {Object.keys(session.user).length > 3 ? (
              <p>
                In this example, the whole session object is passed to the page,
                including the raw user object. Our recommendation is to{" "}
                <em>only pass the necessary fields</em> to the page, as the raw
                user object may contain sensitive information.
              </p>
            ) : (
              <p>
                In this example, only some fields in the user object is passed
                to the page to avoid exposing sensitive information.
              </p>
            )}
            <div className="flex flex-col rounded-md">
              <div className="p-4 font-bold rounded-t-md">Session</div>
              <pre className="py-6 px-4 whitespace-pre-wrap break-all">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </>
        ) : (
          <p>No session data</p>
        )}
      </div>
    </>
  );
}
