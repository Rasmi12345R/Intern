import { NavLinks } from "../../constants/NavLinks";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
    className={`${
      showMenu ? "translate-y-0" : "-translate-y-full"
    } fixed h-screen bottom-0 top-[-20px] z-20 flex w-full flex-col justify-between bg-black px-8 pb-6 pt-16 text-black transition-transform duration-500 ease-in-out md:hidden rounded-r-xl shadow-md`}
  >
      <div id="showMenu" className=" grid grid-cols-1 text-xl bg-black-500 md:gap-4">
        {NavLinks.map((item, index) => (
          <a className=" text-2xl text-white" key={index} href={item.link}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default ResponsiveMenu;
