import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
