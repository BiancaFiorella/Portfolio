
import Nav from "./components/nav";
import Banner from "./components/banner";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <main className="w-full max-w-5xl m-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
