'use client';

import Link from "next/link"
import {useState, useEffect} from "react"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <header className={`fixed top-0 left-0 h-screen z-10 ${scrolled ? "nav-scroll" : "nav-default"}`}>
    <h2 className="logo">B.</h2>
    <nav className="relative">
        <Link className="nav__link" href="/">About</Link>
        <Link className="nav__link" href="/">Experience</Link>
        <Link className="nav__link" href="/">Contact</Link>
    </nav>
  </header>
}