import React from "react";
import { thanks } from "../../assets/images";
import { useTranslation } from "react-i18next";

const Thanks = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; 

  return (
    <div className="flex justify-center items-center py-[40px] md:py-[74px]">
      <div className="max-w-containerSm md:max-w-container mx-auto md:w-[562px] text-center">
        <img alt="Thanks" className="w-[270px] mx-auto" src={thanks}></img>
        <p className="text-[24px] md:text-[32px] font-bold font-firstFont mt-5">
          {t("Təşəkkür edirik!")}
        </p>
        <p className="text-[#0b0b0b] font-secondFont mt-3">
          {t(
            "Müraciətiniz bizə çatdı – komandamız tezliklə sizinlə əlaqə saxlayacaq."
          )}
        </p>
        <a href={`/${currentLanguage}/`}>
          <button className="w-[226px] h-[44px] bg-[#2264DC] font-secondFont text-white rounded-[16px] mt-[30px] md:mt-[48px]">
            {t("Ana səhifəyə qayıt")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Thanks;
