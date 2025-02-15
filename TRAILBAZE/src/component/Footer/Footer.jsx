import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black">
            <div className="grid md:grid-cols-2 gap-8 p-10">
                {/* Left Section */}
                <div className="grid md:grid-cols-3 gap-10">
                    {/* About Section */}
                    <div className="flex flex-col gap-4">
                        <span className="text-2xl text-white">About</span>
                        <ul className="flex flex-col gap-2">
                            {["About Us", "Blog", "Careers", "Jobs", "In Press", "Gallery"].map((item) => (
                                <li key={item}><a href="#" className="text-gray-500 text-lg">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* Support Section */}
                    <div className="flex flex-col gap-4">
                        <span className="text-2xl text-white">Support</span>
                        <ul className="flex flex-col gap-2">
                            {["Contact Us", "Online Chat", "Whatsapp", "Telegram", "Ticketing", "Call Center"].map((item) => (
                                <li key={item}><a href="#" className="text-gray-500 text-lg">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    {/* FAQ Section */}
                    <div className="flex flex-col gap-4">
                        <span className="text-2xl text-white">FAQ</span>
                        <ul className="flex flex-col gap-2">
                            {["Account", "Booking", "Payment", "Returns", "Privacy Policy", "Terms & Conditions"].map((item) => (
                                <li key={item}><a href="#" className="text-gray-500 text-lg">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Section - Newsletter */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <span className="text-white text-2xl">Newsletter</span>
                        <p className="text-gray-500 text-sm">
                            Stay updated with our latest news, promotions, and more. Subscribe to our newsletter!
                        </p>
                    </div>
                    <div className="relative flex w-full max-w-lg">
                        <input type="text"
                            className="rounded-full text-sm text-white border border-gray-500 bg-black placeholder-gray-400 w-full px-4 py-3 outline-none"
                            placeholder="Enter Your Email" />
                        <button className="bg-gray-500 text-white text-sm rounded-full px-6 py-2 absolute right-1 top-1">
                            Submit
                        </button>
                    </div>
                    <div className="flex gap-4 justify-start items-center">
                        <FaInstagram className="text-white h-8 w-8" />
                        <FaFacebookF className="text-white h-8 w-8" />
                        <FaYoutube className="text-white h-8 w-8" />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="bg-gray-400 w-full h-[1px] my-4"></div>

            {/* Footer Text */}
            <div className="text-white text-center py-4">
                <p>&copy; {year} CodeBrowser, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;