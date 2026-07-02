import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import Image from "next/image";
import Link from "next/link";

export default function Approach() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div className="mt-12 flex justify-left ">
  <Image
    src="/images/nurse_laugh_patient.jpg"
    alt="nurse laugh patient home"
    width={900}
    height={250}
    className="w-full max-w-4xl h-auto rounded-3xl"
  />
</div>
      <div>
       
        <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#4D97E8] md:text-5xl">
          Familiar care, built around the person.
        </h2>

        <div className="mt-8 space-y-6 font-sans text-lg leading-8 text-[#000000]">
          <p>
            We begin by understanding your loved one’s routines, preferences,
            personality, home environment, and family concerns.
          </p>

          <p>
            From there, we create a care plan that supports daily living without
            removing independence, dignity, or the feeling of being at home.
          </p>

          <p>
            Whether your family needs a few hours of help each week or more
            consistent support, we are here to help. 
          </p>
          <div className="mt-12 flex justify-left">
  
</div>
        
      </div>
      <Link
          href="/services"
          className="mt-10 inline-flex rounded-full bg-[#9CCB3B] px-7 py-4 font-sans text-sm font-semibold text-white transition hover:bg-[#f4d55b]"
        >
          View All Services
        </Link>
          </div>
          
    </section>
  );
}