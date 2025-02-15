import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#112a34] p-4">
      <div className="flex flex-col gap-2 container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2  shadow-md gap-4 ">
          <div className="text-[#ffffffcc]">
            <div>
              <span className="text-2xl underline">Travelx</span>
              <p className="line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores eaque deserunt delectus excepturi et, exercitationem
                distinctio assumenda sit nihil aperiam explicabo voluptas? A
                repellat laborum laudantium iusto saepe ipsam! Molestiae.
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg text-white">Get In Touch</p>
              <p className="text-lg text-white underline decoration-green-500">
                Example@Mail.com
              </p>
            </div>
            <div className="px-2 flex gap-2">
              <FaLinkedin />
              <FaFacebookF />
              <CiTwitter />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 text-white">
            <div className="flex flex-col gap-2">
              <p className="text-xl underline">About Us</p>
              <ul className="text-[#ffffffcc]">
                <li>
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#">Our Term</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mission and values</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl underline">Help</p>
              <ul className="text-[#ffffffcc]">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Booking Guide</a>
                </li>
                <li>
                  <a href="#">Cancellation Policy</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl underline">Resources</p>
              <ul className="text-[#ffffffcc]">
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 w-full h-[1px]"></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="text-white">
            <p>&copy; {year}  TravelX,  Inc. All Rights Reserved</p>
          </div>
          <div className="flex text-white justify-end gap-4">
            <span>Terms & Conditions</span>
            <span>Privacy & Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
