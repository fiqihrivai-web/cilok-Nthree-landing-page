// app/page.tsx

import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      {/* Semua section ditaruh di sini biar user bisa scroll dari atas sampe bawah */}
      <section id="Home">
        <HeroSection />
      </section>
      <section id="Menu">
        <MenuSection />
      </section>
      <section id="About">
        <AboutSection />
      </section>
      <section id="Location">
        <LocationSection />
      </section>
      <section id="Contact">
        <ContactSection />
      </section>
    </main>
  );
}
