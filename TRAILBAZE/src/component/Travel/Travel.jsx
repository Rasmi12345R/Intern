import { image, image2 } from "../image";

const Travel = () => {
    return(
        <>
        <div className="container">
            <span className="text-xl text-gray-500">Our Blog</span>
            <p className="text-4xl text-black">Our Travel Memories</p>
        </div>
        <div className="container">
        <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
        <div className="shadow-md">
            <img src={image}className="rounded-2xl h-[300px] w-[700px]" alt="img" />
            <span className="text-sm text-gray-500">oct 30,2024</span>
            <p className="text-2xl text-black">2025 Travel Trends - What You Need To Know.</p>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur ae dictus error ipsam atque aperiam minus.</p>
        </div>
        <div className=" shadow-md">
            <img src={image2}className="rounded-2xl h-[300px] w-[700px] " alt="img" />
            <span className="text-sm text-gray-500">oct 30,2024</span>
            <p className="text-2xl text-black">2025 Travel Trends - What You Need To Know.</p>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur ae dictus error ipsam atque aperiam minus.</p>
        </div>
        </div>
        </div>
        </>
    );
};
export default Travel;