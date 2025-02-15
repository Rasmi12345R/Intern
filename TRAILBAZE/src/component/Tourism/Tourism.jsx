import { Location1, Location2, Location3, Location4 } from "../image";

const Tourism = () => {
  return (
    <>
      <div className=" mt-60 grid md:grid-cols-2 sm:grid-cols-1 container">
        <div>
          <span className="text-lg text-gray-500">Best Location</span>
          <p className="text-3xl text-black">Indonisia Tourism</p>
        </div>
        <div>
          <span className="text-lg text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit
            harum, eaque debitis saepe porro sit, natus accusamus illo .
          </span>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-13 gap-2 container">
      <div className="grid md:col-span-5 relative">
          <img
            src={Location1}
            className="w-full h-full object-cover rounded-2xl"
            alt="img"
          />
          <span className="absolute inset-x-0 bottom-4 px-2 text-lg text-gray-300">
            Bromo East Java <br />
            Bromo Tengger Tour
          </span>
        </div>
        <div className="grid md:col-span-4 relative">
          <img
            src={Location3}
            className="w-full h-full object-cover rounded-2xl"
            alt="img"
          />
          <span className="absolute inset-x-0 bottom-4 px-2 text-lg text-gray-300">
            Bromo East Java <br />
            Bromo Tengger Tour
          </span>
        </div>
        <div className="grid md:col-span-4 relative">
          <img
            src={Location2}
            className="w-full h-full object-cover rounded-2xl"
            alt="img"
          />
          <span className="absolute inset-x-0 bottom-4 px-2 text-lg text-gray-300">
            Bromo East Java <br />
            Bromo Tengger Tour
          </span>
        </div>
       
      </div>
      <div className="container relative">
        {" "}
        {/* Added relative here */}
        <img src={Location4} className="w-full rounded-2xl h-100" alt="img" />
        <span className="absolute bottom-2 left-2 text-lg text-white  px-10 py-1 rounded-md">
          Jogjakarta, Central Java <br /> Borobudur Temple Tour
        </span>
      </div>
    </>
  );
};
export default Tourism;
