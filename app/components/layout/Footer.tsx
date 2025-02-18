import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-6 lg:pt-20">
      <Link href="/" className="cursor-pointer overflow-hidden z-0 relative ">
        {" "}
        <h1 className="font-black tracking-wide lg:tracking-tight font-kugile text-center text-7xl md:text-9xl lg:text-[180px] xl:text-[250px] leading-[0.65]  md:leading-[0.5]   text-black/15 animate-text-up xl:pt-24">
          Harmoni
        </h1>
      </Link>
      <section className="bg-slate-900 mb-1 mx-1 rounded-xl text-white pt-8 xl:pt-16 px-4 md:px-6 2xl:mx-2 overflow-hidden z-10 relative">
        <div className="  max-w-7xl 2xl:max-w-8xl mx-auto grid grid-cols-2 lg:grid-cols-3  gap-5 ">
          {/* Brand Column */}
          <div className=" space-y-2">
            <h2 className="text-2xl font-bold font-kugile tracking-wider">
              Harmoni.
            </h2>
            <p className="text-gray-300 2xl:font-medium text-sm   xl:mr-6">
              Quality furniture designed to inspire and enhance your everyday
              life.
              <span className="hidden md:block">
                Discover the perfect piece for your home.
              </span>
            </p>
            <div className="flex gap-3 opacity-90 pt-1 ">
              <a href="#" className="text-gray-300 transition-colors">
                <Image
                  width={20}
                  height={20}
                  className="2xl:w-6 2xl:h-6"
                  alt={"social icon"}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
                />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Image
                  width={20}
                  height={20}
                  className="2xl:w-7 2xl:h-7"
                  alt={"social icon"}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg"
                />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Image
                  width={20}
                  height={20}
                  className="2xl:w-7 2xl:h-7"
                  alt={"social icon"}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                />
              </a>
            </div>
          </div>

          {/* Terms and Conditions Column */}
          <div className="mx-auto  ">
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Booking Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  User Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="hidden lg:block max-md:pt-8 max-md:col-span-2">
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className=" flex items-center bg-white/15 rounded-full border border-white/20 text-white w-[90%] ">
              <input
                type="email"
                placeholder="Enter your email"
                className=" placeholder:text-gray-400 bg-white/0 rounded-l-lg py-3 w-full pl-2 md:pl-4 outline-none"
              />
              <button className="bg-text-black max-md:text-sm rounded-3xl py-1 px-2 mr-1 md:py-1.5 md:px-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl 2xl:max-w-8xl mx-auto mt-12 pb-4 pt-4 md:pt-6 border-t border-white/10 text-center text-xs md:text-sm text-gray-400">
          © {new Date().getFullYear()} Harmoni. All rights reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
