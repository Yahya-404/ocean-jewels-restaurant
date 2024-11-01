"use client";
import {
  AboutSection,
  BlogSection,
  BrandsSection,
  ChefsSection,
  FAQSection,
  Footer,
  HeroSection,
  MenuSection,
  Navbar,
  ReservationSection,
  TestimonialsSection,
} from "@/components/routes";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <ChefsSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
