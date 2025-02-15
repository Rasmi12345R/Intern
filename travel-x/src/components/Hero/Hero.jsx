import { HomeBackground } from "../../images";
import { CiSearch } from "react-icons/ci";
import { Navbar } from "../import";
const Hero = () => {
  return (

      <div className="relative ">
          <div className="absolute z-10 top-5 w-full">{<Navbar />}</div>
        <img src={HomeBackground} alt="Description" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-[550px] flex justify-center items-center text-white text-2xl font-bold">
          <div className="flex flex-col text-center mt-20">
            <span className="text-sm">TravelX</span>
            <p className=" md:text-5xl text-2xl">
              Lets Embrack On Your <br /> Dream Journey
            </p>
            <p className="md:text-sm  text-white p-4">
              discover inspiring destinatons, create unfgettable memories, and
              travel with <br /> confidence - adventure start adventure starts
              here
            </p>
            <div className="flex justify-center items-center bg-white h-[40px] w-[600px] rounded-4xl p-2">
                <CiSearch className="px-2 text-5xl text-gray-500" />
                <input
                  type="text"
                  className=" text-sm text-gray-500 w-full h-full px-4 rounded-2xl outline-none"
                  placeholder="Your journey begins with the search.."
                />
                <button className="bg-green-500 text-black text-sm rounded-4xl p-2 ">
                  Search
                </button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Hero;