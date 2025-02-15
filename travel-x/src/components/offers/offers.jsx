import { FaStar } from "react-icons/fa6";
import { Featured,Featured2, Featured3, PlaneIcon } from "../../images";
const featuredOffers = [
  {
    image: Featured,
    title: "Yulilaya Hotel",
    location: "Gili Trawangan, Lombok",
    rating: 4.9,
    reviews: 853,
  },
  {
    image: Featured2,
    title: "Yulilaya Hotel",
    location: "Gili Trawangan, Lombok",
    rating: 4.9,
    reviews: 853,
  },
  {
    image: Featured3,
    title: "Yulilaya Hotel",
    location: "Gili Trawangan, Lombok",
    rating: 4.9,
    reviews: 853,
  },
];

const Offers = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 p-6 gap-6 container">
      <div className="grid  md:col-span-8 border-solid rounded-2xl border-gray-600 p-4 border-1">
        <p className="uppercase text-gray-500 text-sm sm:text-base">
          featured offer
        </p>
        <h1 className="capitalize font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          unlock exclusive offers
        </h1>
        <span className="font-md text-lg sm:text-xl text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lets go for
          it
        </span>
        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <button className="bg-green-700 rounded-4xl p-3 h-10 sm:h-12 sm:px-6">
            Show More
          </button>
          <img
            src={PlaneIcon}
            alt="img"
            className="w-40 sm:w-60 md:w-80 h-24 sm:h-36 md:h-40"
          />
        </div>
      </div>

      {featuredOffers.map((offer, index) => (
        <div
          key={index}
          className={`relative grid ${
            index === 0 ? "md:col-span-4" : "md:col-span-6"
          }`}
        >
          <img
            src={offer.image}
            alt="img"
            className="rounded-2xl h-full sm:h-80 md:h-96 w-full object-cover"
          />
          <section className="absolute inset-0 flex flex-col justify-end items-start sm:inset-6 md:inset-10 mt-4 sm:mt-6 text-white ml-6">
            <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
              {offer.title}
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              {offer.location}
            </p>
            <span className="flex gap-1 items-center text-sm sm:text-base md:text-lg">
              <FaStar className="text-yellow-100" /> {offer.rating} |{" "}
              {offer.reviews} reviews
            </span>
          </section>
        </div>
      ))}
    </div>
    );
};
export default Offers;
