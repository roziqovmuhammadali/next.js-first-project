import Image from "next/image";
import React from "react";
import laptop from "../../public/laptop.svg";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center mb-10">
      <Image src={laptop} alt="logo" className="w-[800px]" />
    </div>
  );
};

export default Hero;
