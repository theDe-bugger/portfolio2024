import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <section id="home" className="py-24 sm:py-32">
        <Hero />
      </section>

      <section id="experience" className="py-24 sm:py-32">
        <Experience />
      </section>

      <section id="projects" className="py-24 sm:py-32">
        <Projects />
      </section>
    </div>
  );
}
