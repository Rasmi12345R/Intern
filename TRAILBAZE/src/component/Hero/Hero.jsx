import { Homeimg } from '../image';
import { Navbar } from '../import';
import { SlCalender } from "react-icons/sl";
import { FaRegUser, FaAngleDown } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative">
            {/* Navbar */}
            <div className="absolute z-10 top-5 w-full">{<Navbar />}</div>

            {/* Background Image */}
            <img src={Homeimg} alt="Description" className="w-full  rounded-2xl h-[800px]" />

            {/* Overlay Content (Centered) */}
            <div className="mt-80 gap-5 absolute inset-0 flex flex-col justify-center items-center text-white">
                <span className="font-medium text-xl md:text-6xl lg:text-7xl">
                    ExtraOrdinary Natural and <br /> Cultural Charm
                </span>
                <p className="font-semibold text-[12px] md:text-2xl mt-4">
                    Exploring Indonesia is an Unforgettable Adventure.
                </p>

                {/* Centered Search Box */}
                <div className="mt-20 flex flex-row w-[700px] border-1  border-gray-500 justify-center shadow-lg bg-gray-600 p-4 rounded-3xl text-white items-center">
                    <ul className="flex flex-row gap-10">
                        <li className="flex items-center gap-2">
                            <SlCalender className="text-xl" />
                            <span className="text-lg">Date</span>
                            <FaAngleDown className="text-xl" />
                            <span className="text-lg text-white">|</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <SlCalender className="text-xl" />
                            <span className="text-lg">Date</span>
                            <FaAngleDown className="text-xl" />
                            <span className='text-lg text-white'>|</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaRegUser className="text-xl" />
                            <span className="text-lg">Date</span>
                            <FaAngleDown className="text-xl" />
                        </li>
                        <button className='text-xl text-black hover:text-white hover:bg-black  bg-white rounded-2xl border-1 w-[120px] h-[35px] border-gray-500'>Search</button>
                    </ul>
                </div>
                <div className=' mt-20 grid md:grid-cols-4  gap-10 items-center '>
                <div className="h-[200px] w-[250px] rounded-3xl shadow-md bg-gray-200 flex flex-col justify-center items-center">
                <span className="text-7xl text-black">10M+</span>
                <p className="text-lg text-gray-500">Total Customers</p>
                 </div>
                 <div className="h-[200px] w-[250px] rounded-2xl shadow-md bg-gray-200 flex flex-col justify-center items-center">
                        <span className='text-7xl text-black'>09+</span>
                        <p className='text-lg text-gray-500'>Years of Experience</p>
                    </div>
                    <div className="h-[200px] w-[250px] rounded-2xl shadow-md bg-gray-200 flex flex-col justify-center items-center">
                        <span className='text-7xl text-black'>12k</span>
                        <p className='text-lg text-gray-500'>Total Destinations</p>
                    </div>
                    <div className="h-[200px] w-[250px] rounded-2xl shadow-md bg-gray-200 flex flex-col justify-center items-center">
                        <span className='text-7xl text-black'>5.0</span>
                        <p className='text-lg text-gray-500'>Average Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
