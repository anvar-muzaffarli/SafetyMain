import React, { useEffect, useState } from "react";
import { breadcrumb } from "../../assets/images";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useTranslation } from "react-i18next";
import SubOtherHero from "../../Components/Breadcrumb/SubOtherHero/SubOtherHero";

const BlogCard = ({ slide, currentLanguage, getLocalizedField }) => (
  <a href={`/${currentLanguage}/blogs/${slide.id}`} key={slide.id}>
    <div className="rounded-xl py-5 px-4 border border-[#D7D7D7] text-[#292929]">
      <img alt="Slide"
        className="rounded-lg h-[222px] object-cover w-full"
        src={`https://www.safetyguard.az/safetyguard/${slide.image}`}
      ></img>
      <p className="text-[18px] font-medium mt-6">
        {getLocalizedField(slide, "title")}
      </p>
      <p className="mt-2">{getLocalizedField(slide, "date")}</p>
      <p className="mt-4">
        {getLocalizedField(slide, "content")
          .replace(/<[^>]*>/g, "")
          .slice(0, 50)}
        ...
      </p>
      <div className="mt-5">
        <a href={`/${currentLanguage}/blogs/${slide.id}`}>
          <button className="h-[44px] w-full">Daha ətraflı</button>
        </a>
      </div>
    </div>
  </a>
);

const BlogDetail = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [others, setOthers] = useState([]);
  const { id } = useParams();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          "https://www.safetyguard.az/safetyguard/blogs.php"
        );
        const data = response.data.data || [];
        setList(data);
        const filteredOthers = data
          .filter((item) => item.id !== id)
          .slice(0, 3);
        setOthers(filteredOthers);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getBlogs();
  }, [id]);

  const filteredProduct = list.find((product) => product.id == id);

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase]; 
  };

  if (isLoading) {
    return <div className="text-center py-20">Yüklənir...</div>;
  }

  return (
    <>
      <div className="bg-[#F9F9F9]">
        <div
          className="bg-black/60"
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${breadcrumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: window.innerWidth < 640 ? "241px" : "241px",
          }}
        >
          <SubOtherHero title="Bloq" content={filteredProduct?.title} />
        </div>
        <div className="max-w-containerSm md:max-w-container mx-auto pb-[88px] md:pb-[112px]">
          <div className="mt-[48px] md:mt-[56px] flex flex-col-reverse md:flex-row justify-between">
            <div className=" mt-5 md:mt-0">
              <div>
                <img
                  className="w-full h-[366px] object-cover rounded-lg"
                  src={`https://www.safetyguard.az/safetyguard/${filteredProduct?.image}`}
                  alt={filteredProduct?.title}
                />
              </div>
              <p className="text-[24px] font-bold text-[#0B0B0B] mt-[56px]">
                {getLocalizedField(filteredProduct, "title")}
              </p>
              <p className="text-[#393941] mt-5">
                {getLocalizedField(filteredProduct, "date")}
              </p>
              <p
                className="text-[#0B0B0B] mt-7"
                dangerouslySetInnerHTML={{
                  __html: getLocalizedField(filteredProduct, "content"),
                }}
              />
            </div>
          </div>

          <div className="mt-[88px] md:mt-[120px]">
            <div className="flex md:justify-between justify-center">
              <p className="text-[24px] font-medium text-center text-firstColor md:text-left">
                {t("Digər bloqlar")}
              </p>
              <a className="hidden md:block" href={`/${currentLanguage}/blogs`}>
                <button className="bg-[#FAC211] rounded h-[44px] text-[#121212] px-8">
                  {t("Hamısına bax")}
                </button>
              </a>
            </div>

            <div className="hidden md:grid grid-cols-4 gap-5 mt-[34px]">
              {others.map((slide) => (
                <BlogCard
                  key={slide.id}
                  slide={slide}
                  currentLanguage={currentLanguage}
                  getLocalizedField={getLocalizedField}
                />
              ))}
            </div>

            <div className="block md:hidden mt-[48px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {others.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <BlogCard
                      key={slide.id}
                      slide={slide}
                      currentLanguage={currentLanguage}
                      getLocalizedField={getLocalizedField}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <a className="block md:hidden" href={`/${currentLanguage}/blogs`}>
              <button className="bg-[#FAC211] rounded h-[44px] text-[#121212] w-full mt-6">
                {t("Hamısına bax")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
