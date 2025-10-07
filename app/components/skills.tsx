
import Star from "../svg/star";

export default function Skills() {
  
  const skills = [
    {
      title: "UX/UI",
      icon: <Star />,
    },
      {
      title: "Development",
      icon: <Star />,
    },
    {
      title: "Accessibility",
      icon: <Star />,
    },
    {
      title: "Testing",
      icon: <Star />
    }
  ]

const repeatedSkills = Array(10).fill(skills).flat();

  return (
    <div className="w-full overflow-hidden skills">
      <ul className="flex gap-[24px] py-4 skill-container">
         {repeatedSkills.map((skill, index) => (
          <li className="skill__name flex items-center" key={`${skill.title}-${index}`}>
            {skill.title}
            {skill.icon && <span className="pl-6">{skill.icon}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
