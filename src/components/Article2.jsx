import Image from "next/image";
import React from "react";
import parson from "../../public/person.svg";

const Article2 = () => {
  return (
    <div className="flex items-center justify-between px-[170px] py-10 w-full">
      <div>
        <Image src={parson} alt="logo" className="w-[450px]" />
      </div>
      <div className="space-y-10 flex flex-col items-start">
        <h1 className="text-[35px] text-[#1E959B] font-bold leading-10 w-[550px]">
          Начнем работу над вашим ІТ-проектом через 24 часа
        </h1>
        <p className="text-[16px] font-normal leading-4 w-[500px]">
          Проектируем, запускаем и сопровождаем IT-проеты любой сложности
        </p>
        <div className="w-full flex justify-end">
          <button className="w-[250px] rounded-lg h-[70px] bg-[#E25169] font-bold text-white">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article2;
