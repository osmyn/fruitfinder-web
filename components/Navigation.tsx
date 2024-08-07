"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LinkButton from "./LinkButton";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Fruits", href: "/fruits" },
    { name: "About", href: "/about" },
  ];

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="flex mb-24 justify-between py-6 px-10 relative mr-7 z-10 items-start"
      data-testid="navbar"
    >
      <Link href="/" className="text-lg mr-10 2lg:mr-16 ">
        <Image src="/logo.png" alt="Fruit Finder Logo" width="50" height="50" />
      </Link>
      <nav className="lg:hidden" role="navigation" aria-label="Main Menu">
        <button
          className="navbar-burger flex items-center text-blue-600 p-3"
          onClick={handleBurgerClick}
        >
          <svg
            className="block h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div
          className={clsx("w-5 h-5 flex justify-around flex-col", {
            hidden: !isOpen,
          })}
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx("text-lg 2xl:mr-16 hover:underline", {
                    underline: pathname === link.href,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <LinkButton
                href="/signup"
                className="text-lg mr-200 2xl:mr-16 inline-block text-nowrap"
              >
                Sign Up
              </LinkButton>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx("text-lg mr-10 2lg:mr-16 hover:underline", {
                underline: pathname === link.href,
              })}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center">
        <LinkButton href="/signup" className="text-lg mr-10 2lg:mr-16">
          Sign Up
        </LinkButton>
      </div>
    </div>
  );
}
