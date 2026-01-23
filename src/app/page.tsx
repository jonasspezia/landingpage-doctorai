import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <>
      <Analytics />
      <StickyCTA />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <Demo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
