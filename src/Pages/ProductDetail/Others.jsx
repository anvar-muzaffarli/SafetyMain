import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";

const Others = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams(); 
  const currentLanguage = i18n.language;
  const [list, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/dashboard.php`,
        { withCredentials: false }
      );

      const filtered = response.data.data.filter(
        (product) => product.id !== id
      );
      const limitedData = filtered.slice(0, 5);

      setItems(limitedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  if (isLoading) {
    return <p className="text-center text-[white]">Loading...</p>;
  }

  return (
    <div className="max-w-containerSm md:max-w-container mx-auto mt-[88px] md:mt-[128px]">
      <div className="flex md:justify-between justify-center items-center text-[#121212]">
        <p className="text-[24px] font-medium text-center md:text-left">
          {t("Digər məhsullarımız")}
        </p>
        <a className="hidden md:block" href={`/${currentLanguage}/products`}>
          <button className="bg-[#FAC211] rounded h-[44px] text-[#121212] px-8">
            {t("Daha ətraflı")}
          </button>
        </a>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-6 mt-[40px]">
        {list.map((product) => {
          return (
            <ProductCard
              id={product.id}
              name={product.name}
              nameEn={product.nameEn}
              artikul={product.artikul}
              category={product.category}
              colors={product.colors}
              brand={product.brand}
              sizes={product.sizes}
              isNew={product.isNew}
              description={product.description}
              descriptionEn={product.descriptionEn}
              isBestseller={product.isBestseller}
              certificate={product.certificate}
              image1={product.image1}
              image2={product.image2}
              image3={product.image3}
              image4={product.image4}
              image5={product.image5}
            />
          );
        })}
      </div>
      <div className="block md:hidden mt-[48px] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => {
            setShowText(false);
            setShowButton(false);
            setActiveIndex(swiper.activeIndex);
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {list.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  nameEn={product.nameEn}
                  artikul={product.artikul}
                  category={product.category}
                  colors={product.colors}
                  brand={product.brand}
                  sizes={product.sizes}
                  isNew={product.isNew}
                  description={product.description}
                  descriptionEn={product.descriptionEn}
                  isBestseller={product.isBestseller}
                  certificate={product.certificate}
                  image1={product.image1}
                  image2={product.image2}
                  image3={product.image3}
                  image4={product.image4}
                  image5={product.image5}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <a className="block md:hidden" href={`/${currentLanguage}/products`}>
        <button className="bg-[#FAC211] rounded h-[44px] text-[#121212] w-full mt-6">
          {t("Hamısına bax")}
        </button>
      </a>
    </div>
  );
};

export default Others;
