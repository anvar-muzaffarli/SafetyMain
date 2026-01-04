import React from "react";
import {  contactHome } from "../../../assets/images";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[241px] mt-[80px]">
      <img
        src={contactHome}
        alt="Hero"
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <div className="md:w-[842px]">
          <h1 className="text-[24px] md:text-[28px] font-medium">
            {t("Bizimlə Əlaqə Saxlayın ")}
          </h1>
          <p className="text-[14px] mt-3">
            {t(
              "Təhlükəsizlik avadanlıqları ilə bağlı suallarınız və sifarişləriniz üçün bizimlə əlaqə saxlayın. Komandamız sizə tez və peşəkar şəkildə kömək etməyə hazırdır."
            )}
          </p>
          <a href="/contact">
            <button className="rounded bg-[white] w-[120px] h-[44px] mt-10 text-[#121212]">
              {t("Əlaqə ")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
