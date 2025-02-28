"use client";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import Logo from "@/public/images/Logo";

const NavBar = () => {
  {
    /** */
  }
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="  flex  sm:px-6   px-3 py-3 sm:py-3 xl:py-4  mx-auto  z-20  sticky top-0.5 mb-1 rounded-lg backdrop-blur-lg items-center  bg-white/30  max-w-7xl xl:max-w-[98%]  transition-all duration-300 ease-in-out"
      variants={{
        hidden: {
          y: -100,
        },
        visible: {
          y: 0,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/**      MobileNav
  <div className="absolute right-2 md:hidden  ">
        <div
          className="dropdown dropdown-end dropdown-bottom
  "
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="dropdown-content ">
            <ul
              tabIndex={0}
              className=" text-xl   z-[1] menu p-2  shadow bg-background text-background2 font-semibold rounded-box w-44 "
            >
              <li className="">
                <Link href="#Home">Home</Link>
              </li>
              <li>
                <Link href="#About">About</Link>
              </li>
              <li>
                <Link href="#Services"> Services</Link>
              </li>

              <li>
                <Link href="#Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-center w-full">
        <div className="flex   gap-x-1.5  items-center ">
          <Logo />
          <Link
            href="/"
            className=" text-background2 text-xl md:text-2xl     font-medium font-DM_serif tracking-tight"
          >
            Harmoni
          </Link>
        </div>

        <nav className=" hidden md:flex justify-between items-center  ">
          <ul className="flex flex-row justify-around gap-5  mr-2  text-lg font-semibold text-background2 ">
            <li>
              <Link
                href="#Home"
                className="hover:border-b font-semibold hover:border-black transition-all duration-300 ease-in-out  hover:border-solid scroll-smooth"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#About"
                className="hover:border-b font-semibold hover:border-black transition-all duration-300 ease-in-out  hover:border-solid scroll-smooth"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Services"
                className="hover:border-b font-semibold hover:border-black transition-all duration-300 ease-in-out  hover:border-solid scroll-smooth"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <button className="block group  border-zinc-800 text-xs md:text-sm text-background rounded-full px-3 py-1.5  md:px-3 md:py-2  bg-gradient-to-br shadow-sm from-black to-zinc-900 hover:border-white">
          <Link href="/contact" className="  flex items-center">
            Shop
            <ArrowUpRight className="hidden md:block ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
          </Link>
        </button>
      </div>
    </motion.nav>
  );
};

export default NavBar;
