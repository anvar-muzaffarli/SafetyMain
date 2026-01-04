import React from "react";
import { useTranslation } from "react-i18next";

const OtherHero = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center min-h-[240px]">
      <div className="w-full md:w-[600px] text-white p-6 rounded-lg text-center">
        <p className="text-[24px] md:text-[40px] font-semibold">{t(title)}</p>
        <div className="flex items-center justify-center mt-2 text-sm md:text-base">
          <p>{t("Ana səhifə")}</p>
          <i className="fas fa-chevron-right mx-2" />
          <p>{t(title)}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherHero;
