import About from "./sections/About";
import Categories from "./sections/Categories";
import Collection from "./sections/Collection";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import NewCollection from "./sections/NewCollection";
import Services from "./sections/Services";

export default function Home() {
  return (
    <div className=" bg-white font-mono py-2 ">
      <Hero />
      <About />
      <NewCollection />
      <Services />
      <Categories />
      <Collection />
      <FAQ />
    </div>
  );
}
