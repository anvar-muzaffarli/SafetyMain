import React from "react";
import { useTranslation } from "react-i18next";
import { about1, about2 } from "../../../assets/images";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="max-w-containerSm md:max-w-container mx-auto mt-[80px]">
      <div className="flex md:justify-between justify-center ">
        <div className="flex gap-4 items-center">
          <div className="w-[39px] h-[2px] bg-[#FAC211]"></div>
          <p className="text-[24px] font-medium">{t("Haqqımızda")}</p>
        </div>
        <a className="hidden md:block" href={`/${currentLanguage}/about`}>
          <button className="rounded bg-[#FAC211] w-[120px] h-[44px]">
            {t("Daha ətraflı")}
          </button>
        </a>
      </div>
      <div className="md:flex gap-5 mt-8">
        <div className="relative w-full h-[260px] ">
          <img
            src={about1}
            alt="Hero"
            className="w-full h-[260px] object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex flex-col mt-[40px] text-[#121212] pl-[14px] ">
            <h1 className="text-[20px] font-medium w-[280px]">
              {t("Təhlükəsiz İş, Sağlam Gələcək")}
            </h1>
            <p className="text-[14px] mt-3 w-[255px]">
              {t(
                "İşçilərinizin sağlamlığı üçün yüksək keyfiyyətli qoruyucu geyim və aksesuarlara üstünlük verin."
              )}
            </p>
          </div>
        </div>
        <div className="relative w-full h-[260px] ">
          <img
            src={about2}
            alt="Hero"
            className="w-full h-[260px] object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex flex-col mt-[40px] text-[#121212] pl-[14px] ">
            <h1 className="text-[20px] font-medium w-[280px]">
              {t("Peşəkarlar üçün Avadanlıqlar")}
            </h1>
            <p className="text-[14px] mt-3 w-[230px]">
              {t(
                "İş mühitinə uyğun, sertifikatlı təhlükəsizlik vasitələri ilə məhsuldarlığı və etibarı artırın."
              )}
            </p>
          </div>
        </div>
      </div>
      <a className="block md:hidden" href={`/${currentLanguage}/about`}>
        <button className="bg-[#FAC211] rounded h-[44px] text-[#121212] w-full mt-6">
          {t("Hamısına bax")}
        </button>
      </a>
    </div>
  );
};

export default About;
