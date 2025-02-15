  import { useState } from "react";
  import { HiMenu } from "react-icons/hi";
  import { RxCross2 } from "react-icons/rx";
  import { Navlinks} from "../constants/Navlinks";
  import Responsive from "./Responsive";

  const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    const toggleMenu = () => {
      setshowMenu(!showMenu);
    };
    return (
      <div className=" text-white mx-10 p-5 sm:gap-5">
        <div className=" max-w-7xl  mx-auto flex justify-between items-center">
          <div className="flex flex-row">
            <div className="flex  text-black items-center md:hidden">
              {showMenu ? (
                <RxCross2
                  onClick={toggleMenu}
                  className="cursor-pointer  fixed   text-white right-15 z-50 top-5  transition-all"
                  size={30}
                />
              ) : (
                <HiMenu
                  onClick={toggleMenu}
                  className="cursor-pointer text-black r-0 transition-all"
                  size={30}
                />
              )}
            </div>
            <div className=" flex  justify-between">
              <span className="text-white  font-bold text-2xl">TRAILBLAZE</span>
            </div>
          </div>

          <nav className="hidden md:block justify-center items-center">
            <ul className="flex items-center justify-center  text-white text-xl border-gray-300 top-0 gap-8  h-[45px] w-[550px] shadow-md border-1 rounded-3xl bg-gray-500 ">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-6 hover:text-gray-100 duration-100">
                  <a href={link} className=" text-white inline-block text-md font-semibold">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-6 text-md items-center">
            <button className="bg-white text-black text-xl hover:bg-black hover:text-white duration-300 w-20 rounded-3xl p-1">
              Login
            </button>
          </div>
        </div> 
        <Responsive showMenu={showMenu} />
      </div>
    );
  };

  export default Navbar;