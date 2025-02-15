import { FaUser, FaUserCircle } from "react-icons/fa";
import { Navlinks } from "../../constants/navlinks";
import PropTypes from "prop-types";

const ResponsiveMenu = ({ showMenu}) => {
    return (
        <div
        className={`${
            showMenu ? "left-0" : "-left-[100%]"
          } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
        >
        <div className="card">
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50}/>
            <div> 
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
          </div>
          <nav className="mt-12">
            <ul className="space-y-4">
            {Navlinks.map(({ id, name, link })=>(
                <li key={id}>
                  <a href={link} className="inline-block">{name}
                  </a>
                </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className="footer">
          <h1>
            Made With by <a href="">Rasmi</a>
          </h1>
        </div>
         </div>   
    );
}  
ResponsiveMenu.prototypes = {
  showMenu: PropTypes.bool.isRequired,
};
export default ResponsiveMenu;
