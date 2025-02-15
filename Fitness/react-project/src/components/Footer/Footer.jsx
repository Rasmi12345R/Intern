import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Logo } from "../../image";
import { Navlinks } from "../../constants/navlinks";

const Footer = () => {
    return <div className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-100">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3  items-center">
                <div className="flex items-center justify-center gap-3">
                    <img src={Logo} alt="logo" className="w-16" />
                    {/* social media */}
                    <div className="flex items-center gap-3">
                        <a href="#">
                            <FaInstagram
                                className="text-3xl hover:text-primary duration-200" />
                        </a>
                        <a href="#">
                            <FaFacebook
                                className="text-3xl hover:text-primary duration-200" />
                        </a>
                        <a href="#">
                            <FaLinkedin
                                className="text-3xl hover:text-primary duration-200" />
                        </a>
                    </div>
                </div>
               <div className="hidden md:block">Contact Us:986752562</div>
               <nav className="hidden md:block">
                <ul className="flex items-center gap-8">
                    {Navlinks.map(({id,name,link})=>(
                        <li key={id}className="py-4">
                            <a href={link} className="inline-block text-lg font-semibold hover:text-primary py-1 hover:border-primary transition-colors duration-300">{name}</a>
                        </li>
                    ))}
                </ul>
               </nav>
            </div>
        </div>

    </div>

};
export default Footer;