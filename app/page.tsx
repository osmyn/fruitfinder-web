"use client";
import { MsalProvider, useMsal } from "@azure/msal-react";
import Navigation from "@/components/Navigation";
import Content from "@/components/Content";

export default function Home() {
  const { instance } = useMsal();
  return (
    <MsalProvider instance={instance}>
      <Navigation />
      <Content />
    </MsalProvider>
  );
}
