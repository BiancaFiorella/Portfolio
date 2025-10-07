import Bear from "../svg/bear"
import Skills from "./skills"

export default function Banner() {
  return (
    <div className="relative flex mt-[40px] flex-col justify-center items-center max-h-screen">
      <h1 className="text-center max-w-[40%] leading-[1]">Transform with Creativity</h1>
      <p className="banner__txt">Hello! I&#39;m Bianca.</p>
      <Bear />
      <Skills />
    </div>
  );
}