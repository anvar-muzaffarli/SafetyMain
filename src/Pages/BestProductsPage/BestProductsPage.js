import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import ydsImage from '../../assets/images/BestProductsPage/yds.jpg';
import yds2Image from '../../assets/images/BestProductsPage/qisaYds.jpg';
import TdsImage from '../../assets/images/BestProductsPage/TDS.jpg';
import Tds2Image from '../../assets/images/BestProductsPage/qisaTds.jpg';
import GodekceImage from '../../assets/images/BestProductsPage/qisGodekce.PNG';
import elcekImage from '../../assets/images/BestProductsPage/elcek.PNG';
import jiletImage from '../../assets/images/BestProductsPage/jilet.jpg';
import kaskaImage from '../../assets/images/BestProductsPage/kaska2.jpg';
const BestProductsPage = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      src: ydsImage,
      name: t("Təhlükəsizlik Ayaqqabısı YDS")
    },
    {
      id: 2,
      src: GodekceImage,
      name: t("Təhlükəsiz iş geyimi")
    },
    {
      id: 3,
      src: yds2Image,
      name: t("Təhlükəsizlik Ayaqqabısı YDS")
    },
    {
      id: 4,
      src: elcekImage,
      name: t("DYS 300# iş əlcəyi")
    },
    {
      id: 5,
      src: TdsImage,
      name: t("Təhlükəsizlik Ayaqqabısı TDS")
    },
    {
      id: 6,
      src: jiletImage,
      name: t("Mühəndis jileti")
    },
       {
      id: 7,
      src: kaskaImage,
      name: t("Təhlükəsizlik dəbilqəsi")
    },
    {
      id: 8,
      src: Tds2Image,
      name: t("Təhlükəsizlik Ayaqqabısı TDs")
    },

  ];

  return (
    <div className="py-10 w-full overflow-hidden">
      <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
        <span className="w-9 h-[3px] bg-[#FFC024]"></span>
        <h2 className=" text-xl sm:text-2xl  md:text-2xl font-normal">
          {t("Ən çox satılan məhsullar")}
        </h2>

      </div>

      <Swiper
        className="mySwiper pb-10 w-full"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >

        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col">
              <img
                src={product.src}
                className="w-full h-80 object-cover rounded"

                alt={product.name}
              />

              {/* Məhsul Adı */}
              <p className="mt-3 text-lg font-medium text-gray-800 text-left">
                {product.name}
              </p>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default BestProductsPage;


