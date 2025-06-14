import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
