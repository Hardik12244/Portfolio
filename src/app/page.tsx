import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import GithubGraph from "@/components/sections/GithubGraph";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-12 sm:gap-20">
        <Hero />
        <TechStack />
        <Projects />
        <GithubGraph />

        <div className="bg-gray-50/50 py-12">
          <Achievements />
          <Education />
        </div>
        <Contact />
      </main>
    </>
  );
}
