"use client";
import Image from "next/image";
import {
  AuthenticatedTemplate,
  useMsal,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

import Button from "@/components/Button";
import { loginRequest } from "@/lib/authConfig";

export default function Content() {
  const { instance } = useMsal();

  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    console.log("Button clicked");
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Fruit Finder
      </h1>
      <Image src="/logo.png" alt="Fruit Finder logo" width={200} height={200} />
      <p className="text-center">
        Discover the freshest local fruit in your area with Fruit Finder. Add
        and read fruit freshness reviews to see what&apos;s currently in season
        and ripe near you.
      </p>
      <p>
        You are{" "}
        <AuthenticatedTemplate>
          authenticated.
          {activeAccount && <p>you are active</p>}
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          Not signed in yet!
          <Button className="signInButton" onClick={handleRedirect}>
            Sign up
          </Button>
        </UnauthenticatedTemplate>
        .
      </p>
    </main>
  );
}
