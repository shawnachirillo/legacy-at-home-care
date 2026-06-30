import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-[#4D97E8] text-white hover:bg-[#3d4a3d]"
      : "border border-[#4D97E8]/40 bg-white text-[#4D97E8] hover:bg-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-sans text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}