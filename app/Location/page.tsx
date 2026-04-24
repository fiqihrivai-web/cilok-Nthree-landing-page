import LocationSection from "@/components/LocationSection";

export default function LocationPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Spacer biar konten mulai di bawah Navbar */}
      <div className="pt-32 md:pt-40">
        <LocationSection />
      </div>
    </main>
  );
}
