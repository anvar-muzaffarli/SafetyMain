import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import KonusImage from '../../assets/images/BestOffer/uzunKonus.jpg';
import maskaImage from '../../assets/images/BestOffer/maska.PNG';
import qaraSuseImage from '../../assets/images/BestOffer/qaraSuse.jpg';
import qaraEynekImage from '../../assets/images/BestOffer/qaraEynek.jpg';
import sefafEynekImage from '../../assets/images/BestOffer/sefafEynek.jpg';
import sefafSuseImage from '../../assets/images/BestOffer/sefafSuse.jpg';
import KonusImage2 from '../../assets/images/BestOffer/qisaKonus.jpg';
import { useTranslation } from "react-i18next";
const products = [
  { id: 1, name: "Təhlükəsizlik konusu 80sm", image: KonusImage, oldPrice: 25, newPrice: 18 },
  { id: 2, name: "Təhlükəsizlik maskası 3M 6200", image: maskaImage, oldPrice: 27, newPrice: 22 },
  { id: 3, name: "Təhlükəsizlik konusu 45sm", image: KonusImage2, oldPrice: 20, newPrice: 14 },
  { id: 4, name: "Təhlükəsizlik eynəyi UV (şəfaf)", image: sefafEynekImage, oldPrice: 1.3, newPrice: 1 },
  { id: 5, name: "Qaynaqçı şüşəsi (qara)", image: qaraSuseImage, oldPrice: 0.5, newPrice: 0.3 },
  { id: 6, name: "Təhlükəsizlik eynəyi UV (qara)", image: qaraEynekImage, oldPrice: 1.5, newPrice: 1 },
  { id: 7, name: "Qaynaqçı şüşəsi (şəfaf)", image: sefafSuseImage, oldPrice: 0.5, newPrice: 0.3 },
];

const BestOffer = () => {
  const { t } = useTranslation()
  return (
    <div className="py-10 px-4 w-full max-w-6xl mx-auto">
  <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
        <span className="w-9 h-[3px] bg-[#FFC024]"></span>
        <h2 className=" text-xl sm:text-2xl  md:text-2xl font-normal">
          {t("Ən yaxşı təkliflər")}
        </h2>

      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded"
              />
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-800">
                  {product.name}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-gray-400 line-through">
                    {product.oldPrice} ₼
                  </span>
                  <span className="text-red-600 font-semibold text-lg">
                    {product.newPrice} ₼
                  </span>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestOffer;
