import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Spacer biar konten mulai di bawah Navbar */}
      <div className="pt-32 md:pt-40">
        <ContactSection />
      </div>
    </main>
  );
}
