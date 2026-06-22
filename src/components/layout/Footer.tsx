import { site } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#ded4c3] bg-cream px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="font-serif text-3xl font-semibold text-evergreen">
            {site.name}
          </p>
          <p className="mt-2 font-sans text-sm text-muted">
            Comfort. Trust. Care at home.
          </p>
        </div>

        <div className="font-sans text-sm leading-7 text-muted md:text-right">
          <p>{site.serviceArea}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>
      </div>
    </footer>
  );
}