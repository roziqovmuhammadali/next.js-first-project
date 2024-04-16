import Image from "next/image";
import React from "react";
import logo from "../../public/Logo.svg";
import tel from "../../public/tel.svg";
import telegram from "../../public/telegram.svg";
import message from "../../public/message.svg";
import contact from "../../public/contact.svg";
const Footer = () => {
  return (
    <div className="px-[160px] py-[60px]">
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-center gap-4">
          <Image src={logo} alt=" logo" className="w-[250px]" />
          <div className=" flex items-between flex-col gap-5 text-[16px] text-[#1E959B]">
            <p>Мобильные приложения</p>
            <p>Главная страница</p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className=" text-[16px] font-bold text-[#1E959B]">
            Связаться с нами
          </h3>
          <div className="flex items-center justify-center gap-4">
            <Image src={tel} alt="logo" className="w-[30px]" />
            <p className=" text-[14px] text-[#1E959B]">+7 800 301-79-27</p>
          </div>
        </div>
        <div className="flex items-end gap-9">
          <div className="flex items-center justify-center gap-3">
            <Image src={telegram} alt="logo" className=" w-[50px]" />
            <Image src={message} alt="logo" className=" w-[50px]" />
          </div>
          <div className="flex static gap-4">
            <Image src={contact} alt="logo" className="w-[79px] " />
            <p className=" text-[#1E959B] font-normal text-[5px] w-[130px] relative -top-6">
              Индивидуальный предприниматель Степанов Георгий Константинович
              Адрес: г. Обнинск, ул. Белкинская. 19, 136 ОГРНИП 318402700019269
              ИНН 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК" БИК
              044525092 К/c 30101810645250000092 Счет 40802810970010085488
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
