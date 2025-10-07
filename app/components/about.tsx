import BigStar from "../svg/bigStar";
import Splash from "../svg/splash";


export default function About() {
  return (
    <div className="relative flex mt-[100px] flex-col justify-center items-center">
      <h2 className="text-center flex align-top">About Me
        <span className="ml-2.5"><Splash /></span>
      </h2>
      <p className="mt-6 text-center">I’m Bianca a UI/UX designer and frontend developer based in Costa Rica who believes pixels should behave, layouts should flex, and buttons should never ghost you. I specialize in responsive design, accessibility, and scalable systems that make life easier for users and developers.</p>
      <p className="mt-2.5 text-center">My workflow is powered by equal parts creativity and QA obsession. I love catching edge cases before they cause chaos, prototyping clean interfaces, and building experiences that feel intuitive, inclusive, and just a little bit delightful.</p>
      <BigStar />
    </div>
  );
}