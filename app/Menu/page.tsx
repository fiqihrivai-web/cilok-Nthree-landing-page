import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Spacer biar konten mulai di bawah Navbar */}
      <div className="pt-32 md:pt-40">
        <MenuSection />
      </div>
    </main>
  );
}
