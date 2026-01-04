import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SubOtherHero = ({ title, content }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedContent =
    isMobile && content?.length > 15 ? content.slice(0, 15) + "..." : content;

  return (
    <div className="flex justify-center items-center min-h-[240px]">
      <div className="w-full md:w-[1200px] text-white p-6 rounded-lg text-center">
        <p className="text-[24px] md:text-[40px] font-semibold">{t(title)}</p>
        <div className="flex items-center justify-center mt-2 text-sm md:text-base">
          <p>{t("Ana səhifə")}</p>
          <i className="fas fa-chevron-right mx-2" />
          <p>{t(title)}</p>
          <i className="fas fa-chevron-right mx-2" />
          <p>{t(displayedContent)}</p>
        </div>
      </div>
    </div>
  );
};

export default SubOtherHero;

