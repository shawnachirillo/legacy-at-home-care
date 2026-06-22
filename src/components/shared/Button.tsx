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
      ? "bg-evergreen text-white hover:bg-[#3d4a3d]"
      : "border border-wood/40 bg-cream text-evergreen hover:bg-linen";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-sans text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}