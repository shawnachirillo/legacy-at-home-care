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
      ? "bg-[#9CCB3B] text-white hover:bg-[#f4d55b]"
      : "border border-[#4D97E8]/40 bg-white text-[#4D97E8] hover:bg-white";

      variant === "secondary"
      ? "bg-white text-[#4D97E8] hover:bg-[#9CCB3B]"
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