import { Destination, Destination2, Destination3, Destination4, HomeBackground ,PlaneIcon} from "../../images";


const Slide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 container ">
     
    <div className="relative md:col-span-5">
      <img
        src={HomeBackground}
        alt="img"
        className="w-[98%] rounded-2xl h-80"
      />
      <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
        East Nusa Tenggara
      </p>
    </div>
    <div className="relative md:col-span-5">
      <img
        src={Destination}
        alt="img"
        className="w-[98%] rounded-2xl h-80"
      />
      <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
        Bali
      </p>
    </div>

    

   
      <div className="relative  md:col-span-3 ">
        <img
          src={Destination2}
          alt="img"
          className="w-full rounded-2xl h-80"
        />
        <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
          Bali
        </p>
      </div>
      <div className="relative md:col-span-4">
        <img
          src={Destination3}
          alt="img"
          className="w-full rounded-2xl h-80"
        />
        <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
          East java
        </p>
      </div>
      <div className="relative md:col-span-3">
        <img
          src={Destination4}
          alt="img"
          className="w-full rounded-2xl h-80"
        />
        <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
          West papua
        </p>
      </div>
      </div>
  );
};

export default Slide;