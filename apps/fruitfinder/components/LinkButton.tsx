import Link from "next/link";

interface LinkButtonHref {
  pathname: string;
  query?: { name: string };
}

export default function LinkButton({
  href,
  children,
  className,
  ...props
}: Readonly<{
  href: string | LinkButtonHref;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <Link
      href={href}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 shadow duration-200 text-center active:bg-indigo-900 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
