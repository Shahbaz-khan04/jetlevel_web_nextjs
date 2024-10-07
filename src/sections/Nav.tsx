import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import NavbarDropdown from "@/components/navbarDropdown";

const Nav = () => { 
  return (
    <header className="bg-black sticky top-0 z-20">
      <nav className="text-white sticky flex items-center justify-between py-6 px-3 max-w-[1500px] mx-auto ">
        <div id="logo" className="flex-1 w-52 min-w-40">
          <img
            src="https://jetlevel.com/wp-content/uploads/2023/07/jetLeval-logo-1.png"
            alt="Jet Level Aviation Logo"
          />
        </div>

        <div id="dropdown-nav" className="lg:hidden">
          <NavbarDropdown />
        </div>

        <div id="nav-options" className="hidden lg:flex items-center md:pr-0 pr-4">
          <a
            href="#"
            className="flex items-center gap-1 lg:mx-2 min-[1200px]:mx-2 text-white no-underline text-xs text-nowrap min-[1200px]:text-sm"
          >
            OUR SERVICES <FaChevronDown />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 lg:mr-2 min-[1200px]:mx-2 text-white no-underline text-xs text-nowrap min-[1200px]:text-sm"
          >
            JET CHARTER <FaChevronDown />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 lg:mr-2 min-[1200px]:mx-2 text-white no-underline text-xs text-nowrap min-[1200px]:text-sm"
          >
            CHARTER RESOURCES <FaChevronDown />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 lg:mr-2 min-[1200px]:mx-2 text-white no-underline text-xs text-nowrap min-[1200px]:text-sm"
          >
            PRICING
          </a>
          <a
            href="#"
            className="flex items-center gap-1 lg:mr-2 min-[1200px]:mx-2 text-white no-underline text-xs text-nowrap min-[1200px]:text-sm"
          >
            COMPANY <FaChevronDown />
          </a>
        </div>
        <div id="contact-request" className="hidden lg:flex min-w-[255px] text-xs min-[1200px]:text-sm items-center gap-2 justify-end">
          <FaPhone className=" animate-ringing" />
          <span className="">(855) 538-5383</span>
          <a
            href="#"
            className="bg-red-600 text-white text-xs min-[1200px]:text-sm px-4 py-2 rounded-full no-underline hover:bg-red-700"
          >
            Request a Quote
          </a>
        </div>
      </nav>
    </header>

  );
};

export default Nav;
