import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueBanner from "@/components/ValueBanner";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueBanner />
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <AboutUs />
        <Faq />
        <Cta />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
