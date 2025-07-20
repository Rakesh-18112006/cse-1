import React from 'react';
import './Faculty.css';
import Footnote from '../componenets/Footnote';
import Navbar from '../componenets/Navbar';

const faculty = [
  {
    img: "./hod.jpg",
    name: "Ms. Nagarjuna Devi",
    qual: "M.Tech, PhD",
    description: "Head of Computer Science Department at RGUKT Nuzvid with over 15 years of experience in academia and research. Specializes in curriculum development and fostering research culture among students.",
    url: "https://rguktn.ac.in/profile/RN051116003",
    subjects: ["Leadership", "Research Methodology", "Academic Administration", "Computer Networks", "Data Structures"],
    fullBio: "Dr. Nagarjuna Devi has published numerous papers in international journals and conferences. She has guided several PhD students and received the 'Best Teacher Award' from the state government in 2019. Her research focuses on network security and distributed systems."
  },
  {
    img: "./kk-singh.jpg",
    name: "Mr. Krishna Kumar Singh",
    qual: "M.Tech",
    description: "Assistant Professor specializing in Design and Analysis of Algorithms with a passion for competitive programming.",
    url: "https://rguktn.ac.in/profile/RN051116001",
    subjects: ["Algorithms", "Complexity Theory", "Competitive Programming", "Graph Theory", "Dynamic Programming"],
    fullBio: "Mr. Singh has trained multiple teams for ACM-ICPC and other programming contests. His innovative teaching methods make complex algorithmic concepts accessible to students. He regularly conducts workshops on advanced problem-solving techniques."
  },
  {
    img: "./upendra.jpg",
    name: "Dr. R.Upendra Rao",
    qual: "M.Tech, PhD",
    description: "Assistant Professor specializing in Database Systems and Big Data technologies.",
    url: "https://rguktn.ac.in/profile/RN051116004",
    subjects: ["DBMS", "Big Data", "NoSQL", "Data Warehousing", "SQL Optimization"],
    fullBio: "Dr. Rao has extensive industry experience having worked with major IT companies before joining academia. His research focuses on scalable database architectures for cloud environments. He has implemented several industry-academia collaboration programs."
  },
  {
    img: "./rajesh.jpg",
    name: "Mr. B. Rajesh",
    qual: "M.Sc, NET",
    description: "Mathematics Professor dedicated to teaching mathematical foundations for Computer Science students.",
    url: "https://rguktn.ac.in/profile/181351N",
    subjects: ["Discrete Math", "Statistics", "Linear Algebra", "Graph Theory", "Numerical Methods"],
    fullBio: "Mr. Rajesh has a unique ability to connect abstract mathematical concepts with computer science applications. He has developed specialized course materials that bridge the gap between theory and practical implementation in CS."
  },
  {
    img: "./jangili-prasad.jpg",
    name: "Mr. Jangili Prasad",
    qual: "M.Tech",
    description: "Assistant Professor specializing in Electronics & Computing systems.",
    url: "https://rguktn.ac.in/profile/210709N",
    subjects: ["Computer Architecture", "Embedded Systems", "IoT", "Digital Electronics", "VLSI Design"],
    fullBio: "Mr. Prasad focuses on hardware-software co-design and embedded systems development. He leads the department's IoT lab and has guided students in developing several innovative projects that have won national competitions."
  },
  {
    img: "./sadu-chiranjeevi.jpg",
    name: "Dr. S.Chiranjeevi",
    qual: "M.Tech, PhD",
    description: "Assistant Professor specializing in Advanced Computing and Artificial Intelligence.",
    url: "https://rguktn.ac.in/profile/RN051116005",
    subjects: ["Machine Learning", "AI", "Neural Networks", "Deep Learning", "Computer Vision"],
    fullBio: "Dr. Chiranjeevi has published extensively in top-tier AI conferences. His current research focuses on explainable AI and ethical machine learning. He leads the department's AI research group and collaborates with several international universities."
  },
];

function Faculty() {
  return (
    <>
      <Navbar/>
    <section className="faculty-container">
      <h2 className="faculty-title">Our Esteemed Faculty</h2>
      <div className="faculty-grid">
        {faculty.map((member, idx) => (
          <div className="faculty-card" key={idx}>
            <div className="faculty-image-wrapper">
              <img src={member.img} alt={member.name} className="faculty-image" />
            </div>
            <div className="faculty-info">
              <a href={member.url} target="_blank" rel="noopener noreferrer" className="faculty-name">
                {member.name}
              </a>
              <p className="faculty-qual">{member.qual}</p>
              <p className="faculty-desc">{member.description}</p>
              <div className="faculty-subjects">
                {member.subjects.map((subj, i) => (
                  <span className="faculty-subject" key={i}>{subj}</span>
                ))}
              </div>
              <details>
                <summary>Full Bio</summary>
                <p className="faculty-bio">{member.fullBio}</p>
              </details>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footnote/>
    </>
  );
}

export default Faculty;
