import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute middle-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
