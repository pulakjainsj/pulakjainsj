import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Photography } from "@/app/components/Photography";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Photography />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
