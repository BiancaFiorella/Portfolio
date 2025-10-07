

import Banner from "./components/banner";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";


export default function Home() {
  return (
    <div>
      <Banner />
      <main className="w-full max-w-5xl m-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
