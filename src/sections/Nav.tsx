import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    // <header className="bg-black sticky top-0 z-20">
    //   <nav className="text-white sticky flex items-center justify-between p-5 max-w-[1500px] mx-auto pt-6">
    //     <div id="logo" className="flex-1 h-8 w-52 min-w-44">
    //       <img
    //         src="https://jetlevel.com/wp-content/uploads/2023/07/jetLeval-logo-1.png"
    //         alt="Jet Level Aviation Logo"
    //       />
    //     </div>

    //     <div id="dropdown-nav">
    //       <div id="hamburgerIcon">
    //         <RxHamburgerMenu className="h-8 w-7" />
    //       </div>
    //     </div>

    //     <div id="nav-options" className="hidden md:flex items-center">
    //       <a
    //         href="#"
    //         className="flex items-center gap-1 text-white no-underline mx-3 text-sm font-semibold hover:underline"
    //       >
    //         OUR SERVICES <FaChevronDown />
    //       </a>
    //       <a
    //         href="#"
    //         className="flex items-center gap-1 text-white no-underline mx-3 text-sm font-semibold hover:underline"
    //       >
    //         JET CHARTER <FaChevronDown />
    //       </a>
    //       <a
    //         href="#"
    //         className="flex items-center gap-1 text-white no-underline mx-3 text-sm font-semibold hover:underline"
    //       >
    //         CHARTER RESOURCES <FaChevronDown />
    //       </a>
    //       <a
    //         href="#"
    //         className="flex items-center gap-1 text-white no-underline mx-3 text-sm font-semibold hover:underline"
    //       >
    //         PRICING
    //       </a>
    //       <a
    //         href="#"
    //         className="flex items-center gap-1 text-white no-underline mx-3 text-sm font-semibold hover:underline"
    //       >
    //         COMPANY <FaChevronDown />
    //       </a>
    //     </div>
    //     <div id="contact-request" className="hidden md:flex items-center gap-2 justify-end flex-1">
    //       <FaPhone className="mt-1 animate-ringing" />
    //       <span>(855) 538-5383</span>
    //       <a
    //         href="#"
    //         className="bg-red-600 text-white text-sm px-4 py-2 rounded-full no-underline hover:bg-red-700"
    //       >
    //         Request a Quote
    //       </a>
    //     </div>
    //   </nav>
    // </header>


    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://jetlevel.com/">
          <img src="https://jetlevel.com/wp-content/uploads/2023/07/jetLeval-logo-1.png" className="h-8" alt="Jet Level Aviation Logo" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Nav;
