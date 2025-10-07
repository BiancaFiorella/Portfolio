import Link from "next/link";
import BigStar from "../svg/bigStar";
import Splash from "../svg/splash";
import Linkedin from "../svg/linkedin";
import Github from "../svg/github";
import Mail from "../svg/mail";
import ArrowDown from "../svg/arrowDown";

export default function Contact() {
  return <div className="contact-section relative flex mt-[100px] flex-col justify-center items-center">
    <h2 className="text-center flex align-top">Let&#39;s Collaborate
      <span className="ml-2.5"><Splash /></span>
    </h2>
    <p className="mt-6 text-center">Got something in mind? Let&#39;s make it happen.</p>
    <div className="flex justify-between items-start mt-6 w-full">
      <div className="flex flex-col items-center">
        <Linkedin />
        <Link href="https://www.linkedin.com/in/bianca-cortes-gonzalez/" className="mt-6">@bianca-cortes-gonzalez</Link>
      </div>
      <div className="flex flex-col items-center mb-6">
        <Github />
        <Link href="https://github.com/BiancaFiorella" className="mt-6">@BiancaFiorella</Link>
      </div>
      <div className="flex flex-col items-center mb-6">
        <Mail />
        <Link href="mailto:biiancafiiorella@gmail.com" className="mt-6">biiancafiiorella@gmail.com</Link>
      </div>
    </div>
    <BigStar />
    <div className="flex items-center justify-center mt-6">
      <ArrowDown />
      <Link href="https://calendly.com/biancafiorella" className="contact__btn ml-6">Schedule a Meeting</Link>
    </div>
  </div>
}