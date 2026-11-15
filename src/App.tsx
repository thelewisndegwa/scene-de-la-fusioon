import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Experiences } from "./components/Experiences";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Services } from "./components/Services";
import { Why } from "./components/Why";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Experiences />
        <Approach />
        <Gallery />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
