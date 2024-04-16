import Image from "next/image";
import React from "react";
import gift from "../../public/bigGift.svg";
import php from "../../public/php.svg";
import image from "../../public/gift.svg";
const Section = () => {
  return (
    <div className="flex items-center justify-center gap-10 w-full py-20 px-[150px]">
      <div className=" shadow-lg bg-[#FAFBFE] h-[600px] w-[570px] space-y-5 flex items-center rounded-md flex-col ">
        <div className=" static">
          <Image
            src={gift}
            alt="logo"
            className=" w-[360px] -top-16 relative"
          />
        </div>
        <div className=" relative flex">
          <div className="border-r-2 w-[160px] space-y-3">
            <p className=" text-[14px] font-normal text-[#3B3B3B]">
              Длительность
            </p>
            <h1 className="text-[17px] font-bold text-[#1E959B] pl-5">
              10 недель
            </h1>
          </div>
          <div className=" w-[180px] ml-5 space-y-3 ">
            <p className=" text-[14px] font-normal text-[#3B3B3B]">
              Колличество спринтов
            </p>
            <h1 className="text-[17px] font-bold text-[#1E959B] pl-12">
              20 Спринтов
            </h1>
          </div>
        </div>
        <div className="w-full pl-20">
          <Image src={php} alt="logo" className="w-[200px]" />
        </div>
        <div>
          <Image src={image} alt="logo" className="w-[200px]" />
        </div>
        <button className="text-[14px] font-bold  text-white bg-[#F05670] rounded-md w-[370px] h-[60px]">
          УЗНАТЬ СТОИМОСТЬ ПРОЕКТА
        </button>
      </div>
      <div className=" pl-[65px] text-start space-y-10 h-[600px] w-[660px] flex items-center rounded-md flex-col">
        <h1 className="text-[22px] h-[150px] font-semibold text-[#2C9CA1] leading-8 w-[550px]">
          OpenGift – это система монетизации OpenSource-проектов на основе
          блокчейна hyperledger fabric.
        </h1>
        <p className="text-[13px] h-[100px] font-normal text-[#2C9CA1] leading-8 w-[550px]">
          К разработке платформы было привлечено более 5000 разработчиков. Ее
          интегрировали с сетью блокчейнов. Альфа-версия была запущена в январе
          2018 года. OpenGIft был создан для решения проблем, унаследованных от
          разработки программного обеспечения. Платформа позволяет компаниям
          разделять расходы на программное обеспечение, а управление проектами
          является основной функцией, помогающей в сотрудничестве. Для
          монетизации используются смарт-контракты, чтобы создать пассивный,
          периодический потенциал дохода. Уникальность проекта в видении на
          разработку с открытым исходным кодом.
        </p>
      </div>
    </div>
  );
};

export default Section;
