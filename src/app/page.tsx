import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingIcon from "@/components/FloatingIcon";
import IntroOverlay from "@/components/IntroOverlay";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <ScrollProgress />
      <FloatingIcon />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
