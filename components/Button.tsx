export default function Button({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 shadow duration-200 text-center active:bg-indigo-900 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
