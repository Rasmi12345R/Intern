import { PlanningImage } from "../../images";
import { MapImage } from "../../images";
import { TrustImage } from "../../images";
import {} from "../../images";
import { FaArrowRight } from "react-icons/fa";
const Hero2 = () => {
  return (
    <>
      <div className="  grid-cols-1 grid md:grid-cols-3 gap-5 container">
        <div className="flex flex-col items-center ">
          <img
            src={PlanningImage}
            className="text-center w-[150px] h-[150px] p-5"
            alt="img"
          />
          <h1 className="text-xl font-bold text-center">
            Seamless Travel Planning
          </h1>
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            tempore blanditiis voluptas veniam vel qui quaerat ad, dolorem
            nihil. Dolorem tempora est qui perferendis officia aliquid inventore
            culpa. Tempora, quaerat.
          </span>
        </div>
        <div className=" flex flex-col items-center">
          <img
            src={MapImage}
            className="flex justify-center w-[150px] h-[150px] p-5"
            alt="img"
          />
          <h2 className="text-xl font-bold text-center">Toilored Experinces</h2>
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            tempore blanditiis voluptas veniam vel qui quaerat ad, dolorem
            nihil. Dolorem tempora est qui perferendis officia aliquid inventore
            culpa. Tempora, quaerat.
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={TrustImage}
            className=" flex justify-center w-[150px] h-[150px]"
            alt="img"
          />
          <h1 className="text-xl font-bold text-center">
            Realiable And Trustworthly
          </h1>
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            tempore blanditiis voluptas veniam vel qui quaerat ad, dolorem
            nihil. Dolorem tempora est qui perferendis officia aliquid inventore
            culpa. Tempora, quaerat.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <div className=" ">
          <p className="text-xl ">Destination</p>
          <p className="text-4xl font-bold gap-4">
            City Escape And <br />
            Nature Reatreats
          </p>
        </div>
        <div className="py-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            asperiores qui obcaecati, minus, mollitia repellendus commodi illum
            facilis quae pariatur dolor iure nesciunt fuga! Blanditiis in ut
            officia vel reprehenderit.
          </p>
          <div className="">
            <span className="flex items-center gap-2 text-green-950 text-lg font-bold py-4 transition: all 0.3s ease">
              Explore More<FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
