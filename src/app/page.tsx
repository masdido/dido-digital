import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import DemoProjects from "@/components/DemoProjects";
import Process from "@/components/Process";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <Services />
      <DemoProjects />
      <Process />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
}