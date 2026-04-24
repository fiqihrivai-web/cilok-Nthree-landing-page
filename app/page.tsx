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
      <section id="home">
        <HeroSection />
      </section>
      <section id="menu">
        <MenuSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="location">
        <LocationSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
