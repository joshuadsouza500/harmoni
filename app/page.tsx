import About from "./sections/About";
import Categories from "./sections/Categories";
import Collection from "./sections/Collection";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import NewCollection from "./sections/NewCollection";
import Services from "./sections/Services";

{
  /**
Background colours:
1.[#F3F0EA] - more darker brownish
2.[#f7f7f7f8]  - lighter brow orange

Text colours:
Heading: [#9C7B66] brown maybe add more darkness
para texts: [#C9B3A2] light orange
icon bgL:[#F6EDE7]
*/
}
export default function Home() {
  return (
    <div className="  font-sans py-2 [#F3F0EA]  bg-white [#f7f7f7f8]">
      <Hero />
      {/**  <About />
      <NewCollection />   <Services /> */}

      <Categories />
      <Collection />
      <FAQ />
    </div>
  );
}
