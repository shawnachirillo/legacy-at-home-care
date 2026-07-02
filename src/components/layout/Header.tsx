import Link from "next/link";
import { navItems } from "@/lib/constants";
import Image from "next/image";


export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
      <Link href="/" className="flex items-center">
  <Image
    src="/images/lahc_logo.png"
    alt="Legacy At Home Care"
    width={100}
    height={50}
    priority
    className="h-auto w-[100px] md:w-[120px]"
  />
</Link>
        <nav className="hidden items-center gap-8 font-sans text-sm font-medium text-ink lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#4D97E8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#4D97E8] px-5 py-3 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d4a3d]"
        >
          Get Care
        </Link>
      </div>
    </header>
  );
}