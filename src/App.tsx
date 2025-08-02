import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Competitiveness from "@/components/Competitiveness"
import Location from "@/components/Location"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Competitiveness />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Location />
    </div>
  );
};

export default Index;
