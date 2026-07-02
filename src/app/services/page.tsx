import Image from "next/image";
import { serviceDetails } from "@/data/serviceDetails";

export default function ServicesPage() {
  return (
    <main className="bg-[#FFFDF6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-serif text-5xl font-semibold text-[#4D97E8]">
          Our Services
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-[#E8E0D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="mb-6"
              />

              <h2 className="font-serif text-3xl font-semibold text-[#4D97E8]">
                {service.title}
              </h2>

              <p className="mt-3 text-base leading-7 text-[#26382B]">
                {service.description}
              </p>

              <ul className="mt-6 grid max-h-0 gap-2 overflow-hidden text-sm leading-6 text-[#26382B] transition-all duration-500 group-hover:max-h-72">
                {service.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}