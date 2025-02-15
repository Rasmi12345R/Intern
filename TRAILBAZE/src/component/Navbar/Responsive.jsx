import { Navlinks } from "../constants/Navlinks";

const Responsive = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%] duration-500"
      } fixed h-screen bottom-0 top-0  gap-3 z-20 flex  w-[100%] flex-col justify-between bg-black  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div id="showMenu" className=" grid grid-cols-1 gap-3 text-xl bg-black-500 md:gap-4">
        {Navlinks.map((item, index) => (
          <a className=" text-2xl text-white" key={index} href={item.link}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Responsive;