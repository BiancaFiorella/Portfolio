import Splash from "../svg/splash";
import ArrowUp from "../svg/arrowUp";
import Clouds from "../svg/clouds";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="mt-[100px]">
      <div className="flex align-center items-center justify-center">
        <div className="mr-[100px]" >
          <div className="card project-card">
            <Image className="m-0" src="/project.png" width={500} height={500} alt="Nearcode" />
            <h3 className="items-start flex align-top justify-start mt-6">Nearcode
              <span className="ml-2.5">
                <ArrowUp />
              </span>
            </h3>
            <p className="mt-2.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, excepturi.</p>
          </div>
        </div>
         <div className="relative">
          <Clouds />
          <h2 className="project__title absolute right-0 left-0 text-center flex align-top justify-center">Projects
            <span className="ml-2.5"><Splash /></span>
          </h2>
        </div>
    </div>
  </div>
    
  )
}