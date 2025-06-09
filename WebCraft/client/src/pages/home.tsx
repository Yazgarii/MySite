import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicePackages from "@/components/service-packages";
import AboutSection from "@/components/about-section";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicePackages />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
