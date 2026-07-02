import Image from "next/image";
import Button from "@/components/shared/Button";

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Image
        src="/images/script_intro.png"
        alt="There's no place more familiar than home"
        width={1100}
        height={440}
        className="mx-auto w-full max-w-4xl"
      />

      <div className="mt-6 flex items-center justify-center gap-16">
        {/* Left Circle */}
        <div className="relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full shadow-lg">
          <Image
            src="/images/home_1.jpg"
            alt="Warm home care moment"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <p className="max-w-3xl text-center text-lg leading-8 text-[#26382B]">
          Home care is not just help with tasks. It is peace of mind. It is
          knowing someone kind is there to prepare a meal, offer a steady hand,
          change the linens, share conversation, and help your loved one move
          through the day with comfort and dignity.
        </p>

        {/* Right Circle */}
        <div className="relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full shadow-lg">
          <Image
            src="/images/home_2.jpg"
            alt="Comfortable home"
            fill
            className="object-cover"
          />
          
        </div>
       
      </div>
      <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">Schedule a Care Call
            </Button>
            </div>
    </section>
  );
}