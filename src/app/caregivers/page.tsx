import SectionHeading from "@/components/shared/SectionHeading";

export default function CaregiversPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Caregivers"
          title="The right caregiver should bring calm into the home."
          text="Caregiving is not only about completing tasks. It is about presence, patience, reliability, and respect."
        />
        <div className="mt-12 rounded-soft bg-linen p-10">
          <h2 className="font-serif text-3xl font-semibold text-evergreen">What we look for</h2>
          <ul className="mt-6 space-y-4 font-sans text-muted">
            <li>• Warm communication and dependability</li>
            <li>• Respect for family routines and household preferences</li>
            <li>• Patience with aging, memory changes, and emotional transitions</li>
            <li>• A calm, trustworthy presence</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
