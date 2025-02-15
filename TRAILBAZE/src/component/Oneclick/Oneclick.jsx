    import { Workprocess } from "../image";
    import { CiSearch } from "react-icons/ci";
    import { FaTicketAlt } from "react-icons/fa";
    import { MdOutlinePayment } from "react-icons/md";
    import { CiMap } from "react-icons/ci";
    const Oneclick = () =>{
    return(
    <div className=" container grid md:grid-cols-2 sm:grid-cols-1 gap-10">
    <div className=" w-[1/2]">
        <img src={Workprocess} className="rounded-2xl"alt="image" />
    </div>
    <div className="container flex flex-col gap-6">
        <div>
        <span className="text-xl text-gray-300">How it works</span>
        <p className="text-5xl text-black">One click for you</p>
        </div>
    <div className="shadow-md p-2">
        <div className="flex items-center gap-2 "> 
            <CiSearch className="text-2xl"/>
        <p className="  text-xl text-black ">Find Your Destination</p>
        </div>
<p className=" px-8 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi velit doloribus libero, voluptatem animi dignissimos esse eligendi, sequi, molestias a cum eos cupiditate vel deserunt blanditiis aliquam quam option.</p>
    
    </div>
    <div className="shadow-md p-2">
        <div className=" gap-4 flex items-center">
        <FaTicketAlt />
        <span className="text-xl text-black">Book A Trip</span>
        </div>
        <p className=" px-8 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et sunt necessitatibus officia quas illo totam harum dignissimos! Sequi quasi sed dolores beatae consequatur, voluptatum blanditiis tempore eos deleniti nobis!</p>
        </div>
    <div className="shadow-md p-2">
        <div className=" gap-4 flex items-center">
        <MdOutlinePayment />
        <span className="text-xl text-black">Make Payment</span>
        </div>
        <p className=" px-8 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et sunt necessitatibus officia quas illo totam harum dignissimos! Sequi quasi sed dolores beatae consequatur, voluptatum blanditiis tempore eos deleniti nobis!</p>
        </div>
    <div className="shadow-md p-2">
        <div className=" gap-4 flex items-center">
        <CiMap />
        <span className="text-xl text-black">Explore Destination</span>
        </div>
        <p className="px-8 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et sunt necessitatibus officia quas illo totam harum dignissimos! Sequi quasi sed dolores beatae consequatur, voluptatum blanditiis tempore eos deleniti nobis!</p>
        </div>
        </div>
        </div>
    );
    };
    export default Oneclick;
