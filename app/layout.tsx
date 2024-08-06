import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Fruit Finder",
    default: "Fruit Finder",
  },
  description:
    "Discover the freshest local fruit in your area with Fruit Finder. Add and read fruit freshness reviews to see what's currently in season and ripe near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.className} antialiased`}>{children}</body>
    </html>
  );
}
