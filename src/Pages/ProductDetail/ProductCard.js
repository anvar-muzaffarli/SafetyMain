import React from "react";
import { useTranslation } from "react-i18next";

const ProductCard = ({
  index,
  name,
  id,
  image1,
  isNew,
  colors,
  nameEn,
  nameRu,
}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; 

  const getLocalizedValue = (base, baseEn, baseRu) => {
    if (currentLanguage === "en") return baseEn;
    if (currentLanguage === "ru") return baseRu;
    return base;
  };

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase];
  };

  return (
    <a href={`/${currentLanguage}/product-detail/${id}`}>
      <div className="bg-white rounded-[8px] w-full h-full md:w-[229px] min-h-[330px] mx-auto p-5 border border-[#EBEBEB] group relative">
        {isNew == 1 && (
          <div className="absolute top-3 left-3 bg-[#FAC211] text-[#121212] text-[12px] font-medium px-2 py-1 rounded z-10">
            {t("Yeni")}
          </div>
        )}
        <div className="text-[#0B0B0B]">
          <div className="bg-white h-[224px] flex justify-center items-center relative overflow-hidden">
            <img
              className="w-full h-full transition-all duration-300 group-hover:scale-110 object-cover"
              src={`https://www.safetyguard.az/safetyguard/${image1}`}
              alt={name || "Product image"}
            />
          </div>
          <p className="font-medium mt-5 text-[#121212]">
            {getLocalizedValue(name, nameEn, nameRu)}
          </p>

          {/* Renk kutuları */}
          <div className="flex gap-2 mt-3">
            {colors?.map((colorItem, index) => (
              <div
                key={index}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-[#838383] bg-white"
                title={getLocalizedField(colorItem, "name")}
              >
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: colorItem.code }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
