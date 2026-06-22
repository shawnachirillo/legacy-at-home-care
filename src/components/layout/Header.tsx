import Link from "next/link";
import { navItems } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <Link href="/" className="block">
          <p className="font-serif text-3xl font-semibold tracking-wide text-evergreen">
            Legacy
          </p>
          <p className="-mt-1 font-sans text-xs uppercase tracking-[0.32em] text-wood">
            At Home Care
          </p>
        </Link>

        <nav className="hidden items-center gap-8 font-sans text-sm font-medium text-ink lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-wood"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-evergreen px-5 py-3 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d4a3d]"
        >
          Get Care
        </Link>
      </div>
    </header>
  );
}