import Footnote from "./Footnote";
import Frame from "./Frame";
import Navbar from "./Navbar";

const faculty = [
  {
    img: "./hod.jpg",
    name: "Ms. Nagarjuna Devi",
    qual: "M.Tech, PhD",
    description: "Head Of The Department @ Computer Science Department in RGUKT Nuzvid",
    url: "https://rguktn.ac.in/profile/RN051116003",
  },
  {
    img: "./kumar.jpg",
    name: "Mr. Kumar Anurupam",
    qual: "M.Tech, SET",
    description: "Assistant Professor (OOPS Java) @ Computer Science Department in RGUKT Nuzvid",
    url: "https://rguktn.ac.in/profile/130510N",
  },
  {
    img: "./ram.jpg",
    name: "Dr. M. Sadasiva Butchiram",
    qual: "M.Sc, Ph.D, SLET",
    description: "Mentor (Environmental Science) @ Computer Science Department in RGUKT Nuzvid",
    url: "https://rguktn.ac.in/profile/090119N",
  },
  {
    img: "./naidusir.jpeg",
    name: "Mr. C.M Naidu",
    qual: "M.Sc, SLET",
    description: "Assistant Professor (Maths) @ Computer Science Department in RGUKT Nuzvid",
    url: "https://rguktn.ac.in/profile/131305N",
  },
  {
    img: "./suresh.jpg",
    name: "Dr. Nalliboyina Suresh Babu",
    qual: "M.Com, MBA, Ph.D",
    description: "Assistant Professor (C), Management in RGUKT Nuzvid",
    url: "https://rguktn.ac.in/profile/211101N",
  },
  {
    img: "./srilaxmi.jpg",
    name: "Ms. D. Srilakshmi",
    qual: "M-Tech",
    description: "Assistant Professor (C), Computer Science and Engineering",
    url: "https://rguktn.ac.in/profile/180551N",
  },
  {
    img: "./ganesh.jpg",
    name: "Mr. D. Ganesh",
    qual: "M.Tech, M.Sc, SLET",
    description: "Assistant Professor (C), Physics, RGUKT Nuzvid",
    url: "https://rguktn.ac.in/profile/131504N",
  },
];

const Faculty = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-between z-0">
      {/* Navbar */}
      <Navbar />

      {/* Faculty Section */}
      <main className="flex-grow z-10">
        <div className="bg-gray-800 text-white py-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Faculty</h1>
        </div>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((item, index) => (
            <Frame
              key={index}
              name={item.name}
              qual={item.qual}
              img={item.img}
              url={item.url}
              description={item.description}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footnote />
    </div>
  );
};

export default Faculty;
