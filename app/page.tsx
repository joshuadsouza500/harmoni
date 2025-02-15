import About from "./sections/About";
import Categories from "./sections/Categories";
import Collection from "./sections/Collection";
import Hero from "./sections/Hero";
import NewCollection from "./sections/NewCollection";

export default function Home() {
  return (
    <div className=" bg-white font-helvetica py-2 ">
      <Hero />
      <About />
      <NewCollection />
      <Categories />
      <Collection />
    </div>
  );
}
