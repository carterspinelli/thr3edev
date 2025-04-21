import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueBanner from "@/components/ValueBanner";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueBanner />
        <Services />
        <Technologies />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
