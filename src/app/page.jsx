import Article from "@/components/Article";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Section2 from "@/components/Section2";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" space-y-10">
      <Navbar />
      <Hero />
      <Section />
      <Section2 />
      <Article />
    </div>
  );
}
