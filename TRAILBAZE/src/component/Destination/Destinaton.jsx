import { Package1, Package2, Package3 } from "../image";

const Destination = () => {
    return(
        <>
        <div className="container grid sm:grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
                <span className="text-lg text-gray-300">Tour Package</span>
                <p className="text-5xl text-black">Our Tourist Destination</p>
                </div>
                <div>
                    <p className=" md:px-10 sm:px-2 text-lg text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis architecto, tempora magni placeat accusamus labore commodi aliquam. Omnis quas asperiores soluta totam qui quisquam odio? Cum provident dolores officia.</p>
                    </div> 
        </div>
        <div className="container gap-2 grid md:grid-cols-12 sm:grid-cols-1">
        <div className="grid col-span-4 ">
        <img src={Package1}   className=" rounded-2xl h-[400px] w-[450px] " alt="img" />
        <p className="shadow-md absolute text-sm p-2 text-white">7 Days</p>
        <p className="shadow-md absolute left-2 text-sm p-2 text-white">4.9</p>
        </div>
        <div className="grid col-span-4">
        <img src={Package2} className="rounded-2xl h-[400px] w-[450px]" alt="img" />
        <span className="shadow-md absolute text-sm p-2 text-white">5 Days</span>
        <p className="shadow-md absolute  text-sm p-2 text-white">4.9</p>
        </div>
        <div className="grid col-span-4">
        <img src={Package3} className="rounded-2xl h-[400px] w-[450px]" alt="img" />
        <span className="shadow-md absolute text-sm p-2 text-white">5 Days</span>
        <p className="shadow-md absolute   text-sm p-2 text-white">4.9</p>
        </div>
        </div> 
        </>
    );
}
export default Destination;