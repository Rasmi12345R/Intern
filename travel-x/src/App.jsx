import "./App.css";
import Article from "./components/Article/Article";
import {  Hero, Hero2, Slide, Footer} from "./components/import";
import Offers from "./components/offers/offers";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <>
      <div className="bg-white text-black overflow-x-hidden flex flex-col gap-10 ">
          <Hero />
          <Hero2/>
          <Slide/>
          <Offers />
          <Sections/>
         <Article/>
          <Footer/>
      </div>
    </>
  );
}

export default App;
