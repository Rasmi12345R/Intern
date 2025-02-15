import {
  BudgetTravel,
  Family,
  FoodArticle,
  HiddenGame,
  Photo7,
  TipsImage,
} from "../../images";

const articles = [
  {
    imgSrc: HiddenGame,
    title: "10 must-visit hidden game in southeast asia",
    description: "Destination Discovery",
    author: "Sandy Aldiancsyah",
    readTime: "9 min read",
  },
  {
    imgSrc: Family,
    title: "Traveling with kids: tips for stress-free family adventures",
    description: "Family Travel",
    readTime: "7 min read",
  },
  {
    imgSrc: FoodArticle,
    title: "Culinary adventure: exploring world cuisines on your travels",
    description: "Food and Travel",
    readTime: "5 min read",
  },
  {
    imgSrc: BudgetTravel,
    title: "Traveling on budget: tips for affordable adventure.",
    description: "Budget Travel",
    readTime: "7 min read",
  },
  {
    imgSrc: TipsImage,
    title: "Traveling with kids: tips for stress-free family adventures",
    description: "Travel Tips",
    readTime: "7 min read",
  },
];

const Article = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-2">
        <span className="uppercase text-gray-700">Resources</span>
        <h1 className="font-bold text-4xl text-black">Latest Article</h1>
        <img
          src={HiddenGame}
          alt="img"
          className="rounded-4xl h-64 w-full" // Fixed height and width for the main article image
        />
        <span className="text-gray-700 text-xl">Destination Discovery</span>
        <h2 className="font-bold text-black text-2xl">
          10 must-visit hidden game in southeast asia
        </h2>
        <div className="flex flex-row gap-2 items-center">
          <img src={Photo7} alt="img" className="w-12 h-12 rounded-full" />
          <h1 className="text-gray-500 text-lg">sandy aldiansyah - 9 min read</h1>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {articles.slice(1).map((article, index) => (
          <div key={index} className="flex flex-row items-center gap-3">
           <div className=" h-20 md:h-48 w-48">
           <img
              src={article.imgSrc}
              alt="img"
              className={`w-full h-full rounded-xl`} 
            />
           </div>
            <span className="flex flex-col">
              <h1 className="text-black font-bold text-xl">{article.title}</h1>
              <p className="text-gray-900 text-lg">{article.description} - {article.readTime}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
