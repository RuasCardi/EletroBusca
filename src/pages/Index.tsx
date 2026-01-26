import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeCollect from "@/components/WhatWeCollect";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeCollect />
      <HowItWorks />
      <Benefits />
      <CTA />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Index;
