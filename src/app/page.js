import TopAnnouncement from "./components/TopAnnouncement";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Stats from "./components/Stats";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import StickyMobileBar from "./components/StickyMobileBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#0F1C18]">
      <TopAnnouncement />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Process />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}