import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import Scale from "./components/sections/Scale";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Intro />
      <About />
      <Scale />
    </div>
  );
}
