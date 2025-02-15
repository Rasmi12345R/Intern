import {
    Section,
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
  } from "../../images";
  
  const travelersData = [
    {
      img: Photo1,
      name: "Marvin Devin",
      role: "Traveler",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
    },
    {
      img: Photo2,
      name: "Marvin Devin",
      role: "Traveler",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
    },
    {
      img: Photo3,
      name: "Marvin Devin",
      role: "Traveler",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
    },
    {
      img: Photo4,
      name: "Marvin Devin",
      role: "Traveler",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
    },
    {
      img: Photo5,
      name: "Marvin Devin",
      role: "Traveler",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
    },
    {
      img: Photo6,
      name: "Marvin Devin",
      role: "Traveler",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
    },
  ];
  
  const Sections = () => {
    return (
      <div className="relative">
        <img
          src={Section}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            objectPosition: "center center", // Ensures the image is centered both vertically and horizontally
          }}
        />
  
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
          <div className="container ">
            <div className="flex flex-col gap-3 text-center justify-center">
              <span className="capitalize text-3xl">adventure&apos; voices</span>
              <span className="font-semibold capitalize text-7xl">
                adventurer&apos; voices
              </span>
              <span className="capitalize font-semibold text-2xl">
                real stories from our adventurers community
              </span>
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 p-20">
              {travelersData.map((traveler, index) => (
                <div
                  key={index}
                  className="md:col-span-4 flex flex-col gap-4 bg-white text-black md:rounded-4xl rounded-sm md:p-6 p-3"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={traveler.img}
                      alt="img"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <section>
                      <h1 className="font-bold">{traveler.name}</h1>
                      <span className="font-semibold text-gray-900">
                        {traveler.role}
                      </span>
                    </section>
                  </div>
                  <p>{traveler.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sections;