import Pc from "../svg/pc";
import Splash from "../svg/splash";

export default function Experience() {

 const experience = [
    
 
   {
      title: "UI Engineer",
      company: "EX2 Outcoding",
      year: "2019 - 2021",
      description: "",
      skills: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      title: "Frontend Developer",
      company: "Q6Cyber",
      year: "2021 - 2022",
      description: "",
      skills: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      title: "Software Developer",
      company: "FuzionSoft",
      year: "2022 - 2023",
      description: "",
      skills: ["Figma", "Adobe XD", "Sketch"]
    },
    {
     title: "Software Engineer",
      company: "ValueLabs",
      year: "2023 - 2024",
      description: "",
      skills: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      title: "QA Engineer",
      company: "Cecropia Solutions",
      year: "2025",
      description: "",
      skills: ["Figma", "Adobe XD", "Sketch"]
    },
  ]

  return (
    <div className="mt-[100px]">
      <div className="flex align-center items-center justify-flex-start">
        <div className="mr-[100px] flex justify-center flex-col items-center">
          <h2 className="text-center flex align-top justify-center mb-[50px]">My Journey
            <span className="ml-2.5"><Splash /></span>
          </h2>
          <Pc />
        </div>
        <div className="relative">
          {[...experience].map((job, index) => (
            <div className="card experience-card" key={`${job.title}-${index}`}>
              <div className="flex items-center justify-between">
                <h3>{job.title}</h3>
                <p className="card__year">{job.year}</p>
              </div>
              <div>
                <p className="card__company mt-2.5 mb-2.5">{job.company}</p>
                <p className="mb-6">{job.description}</p>
                <hr className="divider"></hr>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {job.skills.map((skill, skillIndex) => (
                    <span key={`${skill}-${skillIndex}`} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}