import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Env from "./components/sections/Env";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import Mission from "./components/sections/Mission";
import Product from "./components/sections/Product";
import Scale from "./components/sections/Scale";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Intro />
      <About />
      <Scale />
      <Product />
      <Gallery />
      <Env />
     
    </div>
  );
}
