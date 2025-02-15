import { useState } from "react";
// import { Navlinks } from "../../constants/navlink";
import { NavLinks } from "../../constants/NavLinks";
// import { ResponsiveMenu } from "../import";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className=" relative   rounded-md bg-blue-300/30 backdrop-blur-sm  text-white mx-10">
      <div className=" container flex justify-between items-center">
        <div className="flex flex-row">
          <div className="flex items-center md:hidden">
            {showMenu ? (
              <RxCross2
                onClick={toggleMenu}
                className="cursor-pointer  fixed top-5 right-0 z-50  transition-all"
                size={30}
              />
            ) : (
              <HiMenu
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
          <div className="text-2xl flex p-2 justify-between">
            <span>Travelx</span>
          </div>
        </div>

        <nav className="hidden md:block justify-center items-center">
          <ul className="flex shadow-md items-center top-0 gap-8 ">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id} className="py-6 hover:text-gray-100 duration-100">
                <a href={link} className="inline-block text-md font-semibold">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-6 text-md items-center">
          <span className="hover:text-gray-100 duration-300">sign up</span>
          <button className="bg-white hover:bg-black text-black hover:text-white duration-300 w-14 rounded-2xl p-1">
            login
          </button>
        </div>
      </div> 
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};
export default Navbar;