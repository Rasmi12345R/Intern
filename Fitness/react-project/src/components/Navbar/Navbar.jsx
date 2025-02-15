import { LuPhoneCall } from "react-icons/lu";
import { Navlinks } from '../../constants/navlinks';
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Logo } from "../../image";
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  };
    return (
        <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="sm:flex  items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group ">
              <LuPhoneCall className="text-primary text-2xl duration-200 group-hover:scale-105" />
              9822198383
            </div>
            <div>
              <img src={Logo} alt="logo"
                className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0" />
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Navlinks.map(({ id, name, link })=>(
                <li key={id} className="py-4">
                  <a href={link} className="inline-block text-lg font-semobold">{name}
                  </a>
                </li>
                ))}
                <DarkMode/>
              </ul>
            </nav>
            {/*Mobile view*/}
            <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode/>
            {showMenu? (
                  <HiMenuAlt1 
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                  />
                ):(
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                  />
                  )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu}/>
      </div>
    );
};
export default Navbar;