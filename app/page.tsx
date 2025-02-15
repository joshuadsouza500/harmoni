import About from "./sections/About";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className=" bg-white font-helvetica py-2 ">
      <Hero />
      <About />
    </div>
  );
}
