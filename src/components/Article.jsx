import Image from "next/image";
import React from "react";
import smartfon from "../../public/smartfon.svg";
import tablo from "../../public/tablo.svg";
import tablotwo from "../../public/tablotwo.svg";
import open from "../../public/open.svg";
import tablothree from "../../public/tablothree.svg";
import smartfontwo from "../../public/smartfontwo.svg";

const Article = () => {
  return (
    <div className="w-full px-[150px] flex space-y-20 items-center justify-center py-10 flex-col">
      <h1 className="text-[24px] font-bold text-[#1E959B]">
        ПРОЕКТЫ КОМАНДЫ PRODUCTFIT
      </h1>
      <div className="grid grid-cols-3 gap-16">
        <div className="flex items-center justify-center flex-col rounded-lg w-[330px] h-[350px] space-y-4 p-[25px] bg-[#FAFBFE]">
          <Image src={smartfon} alt="logo" className="w-[210px]" />
          <h2 className="text-[16px] font-bold text-[#1E959B]">Cabify</h2>
          <p className="text-[14px] font-normal leading-4">
            Кроссплатформенное приложение под Android и iOS разработано на React
            Native(Python)
          </p>
        </div>
        <div className="flex items-center justify-center flex-col rounded-lg w-[330px] h-[350px] space-y-4 p-[25px] bg-[#FAFBFE]">
          <Image src={tablo} alt="logo" className="w-[250px]" />
          <h2 className="text-[16px] font-bold text-[#1E959B]">
            Ural Airlines
          </h2>
          <p className="text-[14px] font-normal leading-4">
            Все сервисы для пассажиров «Уральских авиалиний» в одном приложении
            на Swift и Java
          </p>
        </div>
        <div className="flex items-center justify-center flex-col rounded-lg w-[330px] h-[350px] space-y-4 p-[25px] bg-[#FAFBFE]">
          <Image src={open} alt="logo" className="w-[250px]" />
          <h2 className="text-[16px] font-bold text-[#1E959B]">OpenGift</h2>
          <p className="text-[14px] font-normal leading-4">
            Система монетизации OpenSource-проектов на основе блокчейна
            hyperledger fabric
          </p>
        </div>
        <div className="flex items-center justify-center flex-col rounded-lg w-[330px] h-[350px] space-y-4 p-[25px] bg-[#FAFBFE]">
          <Image src={tablotwo} alt="logo" className="w-[250px]" />
          <h2 className="text-[16px] font-bold text-[#1E959B]">PlanDi</h2>
          <p className="text-[14px] font-normal leading-4">
            Сервис поиска актуальной работы проектировщикам и компаниям
          </p>
        </div>
        <div className="flex items-center justify-center flex-col rounded-lg w-[330px] h-[350px] space-y-4 p-[25px] bg-[#FAFBFE]">
          <Image src={tablothree} alt="logo" className="w-[250px]" />
          <h2 className="text-[16px] font-bold text-[#1E959B]">Коалиция</h2>
          <p className="text-[14px] font-normal leading-4">
            Проект для ведущего в России Центра образования, который
            осуществляет подготовку школьников к сдаче ЕГЭ.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col rounded-lg w-[330px] h-[350px] space-y-4 p-[25px] bg-[#FAFBFE]">
          <Image src={smartfontwo} alt="logo" className="w-[250px]" />
          <h2 className="text-[16px] font-bold text-[#1E959B]">Rubetek</h2>
          <p className="text-[14px] font-normal leading-4">
            Управление домом IoT и микрофреймворк на языке Python совместно с
            Java и Swift
          </p>
        </div>
      </div>
      <button className="border-2 w-[210px] h-[60px] rounded-lg text-[16px] font-semibold text-[#1E959B]">
        Все проекты
      </button>
    </div>
  );
};

export default Article;
