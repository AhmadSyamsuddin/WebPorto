import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* Simple Footer */}
      <footer className="py-12 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
