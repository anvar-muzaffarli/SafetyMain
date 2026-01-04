// import React, { useEffect, useRef, useState } from "react";
// import Others from "./Others";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { breadcrumb, files } from "../../assets/images";
// import { Helmet } from "react-helmet";
// import SubOtherHero from "../../Components/Breadcrumb/SubOtherHero/SubOtherHero";

// export default function ProductDetail() {
//   const { t, i18n } = useTranslation();
//   const currentLanguage = i18n.language;
//   const [list, setItems] = useState([]);
//   const [partners, setPartners] = useState([]);
//   const { id } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeModalIndex, setActiveModalIndex] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   const getImagesArray = (item) => {
//     return [
//       item.image1,
//       item.image2,
//       item.image3,
//       item.image4,
//       item.image5,
//     ].filter(Boolean);
//   };

//   const images = getImagesArray(list);

//   const openModal = (index) => {
//     setActiveModalIndex(index);
//     setIsModalOpen(true);
//   };

//   const changeImage = (direction) => {
//     const newIndex =
//       (activeModalIndex + direction + images.length) % images.length;
//     setActiveModalIndex(newIndex);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     getProducts();
//     getPartners();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.safetyguard.az/safetyguard/dashboard.php`,
//         { withCredentials: false }
//       );
//       const filteredProducts = response.data.data.filter(
//         (product) => product.id == id
//       );
//       setItems(filteredProducts[0]);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const getPartners = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.safetyguard.az/safetyguard/partners.php`,
//         { withCredentials: false }
//       );
//       setPartners(response.data.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const getLocalizedField = (item, fieldBase) => {
//     if (currentLanguage === "en")
//       return item[`${fieldBase}En`] || item[fieldBase];
//     if (currentLanguage === "ru")
//       return item[`${fieldBase}Ru`] || item[fieldBase];
//     return item[fieldBase];
//   };

//   const matchingPartner = partners.find(
//     (partner) => partner.name === getLocalizedField(list, "brand")
//   );

//   return (
//     <>
//       <Helmet>
//         <title>{getLocalizedField(list, "meta_tag_title")}</title>
//         <meta
//           name="description"
//           content={getLocalizedField(list, "meta_tag_description")}
//         />
//         <meta
//           name="keywords"
//           content={getLocalizedField(list, "meta_tag_keywords")}
//         />
//       </Helmet>

//       <div className="bg-[#FDFDFD]">
//         <div
//           className="bg-black/60"
//           style={{
//             backgroundImage: `url(${breadcrumb})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             width: "100%",
//             height: "241px",
//           }}
//         >
//           <SubOtherHero title="Məhsullar" content={list.name} />
//         </div>

//         <div className="md:max-w-container max-w-containerSm mx-auto pb-[88px] md:pb-[112px]">
//           <div className="md:flex justify-between mt-[40px] md:mt-[88px]">
//             <div className="md:w-[475px]">
//               <div className="bg-white mb-3 flex justify-center items-center md:w-[475px] h-[411px] rounded border border-[#e2e2e2]">
//                 <Swiper
//                   ref={swiperRef}
//                   spaceBetween={30}
//                   centeredSlides={true}
//                   autoplay={{
//                     delay: 5000,
//                     disableOnInteraction: false,
//                   }}
//                   pagination={{ clickable: true }}
//                   navigation={true}
//                   onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//                   modules={[Autoplay, Pagination, Navigation]}
//                   className="main-slider"
//                 >
//                   {images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                       <div className="relative bg-white w-full h-[354px] rounded-xl flex items-center justify-center cursor-pointer">
//                         <img
//                           className="max-w-full max-h-full object-contain"
//                           src={`https://www.safetyguard.az/safetyguard/${image}`}
//                           alt={`Slide ${index + 1}`}
//                           onClick={() => openModal(index)}
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>

//               <div className="flex justify-center mt-5 space-x-3">
//                 {images.map((slide, index) => (
//                   <div
//                     key={index}
//                     className={`cursor-pointer border-2 ${
//                       index === activeIndex
//                         ? "border-[#264D92]"
//                         : "border-transparent"
//                     } rounded-lg bg-white w-[80px] h-[60px] flex items-center justify-center`}
//                     onClick={() => swiperRef.current.swiper.slideTo(index)}
//                   >
//                     <img
//                       className="max-w-full max-h-full object-contain"
//                       src={`https://www.safetyguard.az/safetyguard/${slide}`}
//                       alt={`Thumbnail ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>

//               {isModalOpen && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
//                   <div className="relative">
//                     <button
//                       onClick={closeModal}
//                       className="absolute top-2 right-2 text-[#264D92] text-4xl font-bold z-20"
//                     >
//                       ×
//                     </button>
//                     <div className="bg-white md:w-[500px] md:h-[500px] rounded-lg flex items-center justify-center relative">
//                       <button
//                         className="absolute left-0 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 z-10"
//                         onClick={() => changeImage(-1)}
//                       >
//                         &#60;
//                       </button>
//                       {images[activeModalIndex] && (
//                         <img
//                           className="max-w-full max-h-full object-contain"
//                           src={`https://www.safetyguard.az/safetyguard/${images[activeModalIndex]}`}
//                           alt="Selected"
//                         />
//                       )}
//                       <button
//                         className="absolute right-0 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 z-10"
//                         onClick={() => changeImage(1)}
//                       >
//                         &#62;
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="md:w-[761px] mt-[65px] md:mt-0 text-[#121212]">
//               <div className="md:flex justify-between items-center">
//                 <h4 className="text-[24px] md:text-[28px] font-medium mb-4 md:mb-0">
//                   {getLocalizedField(list, "name")}
//                 </h4>
//                 <a
//                   href={`https://www.safetyguard.az/safetyguard/${list.certificate}`}
//                 >
//                   <img alt="File" className="h-111 w-11" src={files}></img>
//                 </a>
//               </div>
//               <p className=" font-medium text-[#121212] mt-5">
//                 {t("Artikul")}{" "}
//                 <span className="font-normal">{list.artikul}</span>
//               </p>
//               <p className="font-medium mt-4">{t("Brend")}</p>
//               <div className="flex items-center gap-2 mt-2">
//                 {matchingPartner?.image && (
//                   <img
//                     src={`https://www.safetyguard.az/safetyguard/partners/${matchingPartner.image}`}
//                     alt="Brand Logo"
//                     className="h-6 md:h-8 object-contain"
//                   />
//                 )}
//               </div>

//               <p className="font-medium mt-4">{t("Rəng")}</p>
//               <div className="flex gap-2 mt-2">
//                 {list.colors?.map((colorItem, index) => (
//                   <div
//                     key={index}
//                     className="w-7 h-7 flex items-center justify-center rounded-full border border-[#838383] bg-white"
//                     title={getLocalizedField(colorItem, "name")}
//                   >
//                     <div
//                       className="w-5 h-5 rounded-full"
//                       style={{ backgroundColor: colorItem.code }}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//               <p className="font-medium mt-4">{t("Ölçü")}</p>
//               <div className="flex gap-2 mt-2">
//                 {list.sizes?.map((sizeItem, index) => (
//                   <div className="w-[44px] h-[32px] flex items-center justify-center rounded-[14px] border border-[#EBEBEB] bg-white">
//                     {sizeItem.name}
//                   </div>
//                 ))}
//               </div>
//               <a href={`/${currentLanguage}/contact`}>
//                 <button className="bg-[#FAC211] md:w-[160px] w-full rounded h-[44px] text-[#121212] mt-8">
//                   {t("Sifariş et")}
//                 </button>
//               </a>
//               <p className="font-medium mt-8">{t("Ətraflı məlumat")}</p>
//               <p
//                 className="mb-9 text-sm md:text-[16px] mt-4 leading-6"
//                 dangerouslySetInnerHTML={{
//                   __html: getLocalizedField(list, "description"),
//                 }}
//               />
//             </div>
//           </div>
//           <Others />
//         </div>
//       </div>
//     </>
//   );
// }





import React, { useEffect, useRef, useState } from "react";
import Others from "./Others";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { breadcrumb, files } from "../../assets/images";
import { Helmet } from "react-helmet";
import SubOtherHero from "../../Components/Breadcrumb/SubOtherHero/SubOtherHero";

export default function ProductDetail() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [list, setItems] = useState([]);
  const [partners, setPartners] = useState([]);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const getImagesArray = (item) => {
    return [
      item.image1,
      item.image2,
      item.image3,
      item.image4,
      item.image5,
    ].filter(Boolean);
  };

  const images = getImagesArray(list);

  const openModal = (index) => {
    setActiveModalIndex(index);
    setIsModalOpen(true);
  };

  const changeImage = (direction) => {
    const newIndex =
      (activeModalIndex + direction + images.length) % images.length;
    setActiveModalIndex(newIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getProducts();
    getPartners();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/dashboard.php`,
        { withCredentials: false }
      );
      const filteredProducts = response.data.data.filter(
        (product) => product.id == id
      );
      setItems(filteredProducts[0]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getPartners = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/partners.php`,
        { withCredentials: false }
      );
      setPartners(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase];
  };

  const matchingPartner = partners.find(
    (partner) => partner.name === getLocalizedField(list, "brand")
  );

  return (
    <>
      <Helmet>
        <title>{getLocalizedField(list, "meta_tag_title")}</title>
        <meta
          name="description"
          content={getLocalizedField(list, "meta_tag_description")}
        />
        <meta
          name="keywords"
          content={getLocalizedField(list, "meta_tag_keywords")}
        />
      </Helmet>

      <div className="bg-[#FDFDFD]">
        <div
          className="bg-black/60"
          style={{
            backgroundImage: `url(${breadcrumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "241px",
          }}
        >
          <SubOtherHero title="Məhsullar" content={list.name} />
        </div>

        <div className="md:max-w-container max-w-containerSm mx-auto pb-[88px] md:pb-[112px]">
          <div className="md:flex justify-between mt-[40px] md:mt-[88px]">
            <div className="md:w-[475px]">
              <div className="bg-white mb-3 flex justify-center items-center md:w-[475px] h-[411px] rounded border border-[#e2e2e2]">
                <Swiper
                  ref={swiperRef}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  modules={[Autoplay, Pagination, Navigation]}
                  // Düzəliş burada edildi: w-full və h-full əlavə olundu
                  className="main-slider w-full h-full"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative bg-white w-full h-[354px] rounded-xl flex items-center justify-center cursor-pointer">
                        <img
                          className="max-w-full max-h-full object-contain"
                          src={`https://www.safetyguard.az/safetyguard/${image}`}
                          alt={`Slide ${index + 1}`}
                          onClick={() => openModal(index)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex justify-center mt-5 space-x-3">
                {images.map((slide, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-2 ${
                      index === activeIndex
                        ? "border-[#264D92]"
                        : "border-transparent"
                    } rounded-lg bg-white w-[80px] h-[60px] flex items-center justify-center`}
                    onClick={() => swiperRef.current.swiper.slideTo(index)}
                  >
                    <img
                      className="max-w-full max-h-full object-contain"
                      src={`https://www.safetyguard.az/safetyguard/${slide}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                  <div className="relative">
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 text-[#264D92] text-4xl font-bold z-20"
                    >
                      ×
                    </button>
                    <div className="bg-white md:w-[500px] md:h-[500px] rounded-lg flex items-center justify-center relative">
                      <button
                        className="absolute left-0 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 z-10"
                        onClick={() => changeImage(-1)}
                      >
                        &#60;
                      </button>
                      {images[activeModalIndex] && (
                        <img
                          className="max-w-full max-h-full object-contain"
                          src={`https://www.safetyguard.az/safetyguard/${images[activeModalIndex]}`}
                          alt="Selected"
                        />
                      )}
                      <button
                        className="absolute right-0 text-white text-4xl font-bold bg-black bg-opacity-50 px-3 py-2 z-10"
                        onClick={() => changeImage(1)}
                      >
                        &#62;
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="md:w-[761px] mt-[65px] md:mt-0 text-[#121212]">
              <div className="md:flex justify-between items-center">
                <h4 className="text-[24px] md:text-[28px] font-medium mb-4 md:mb-0">
                  {getLocalizedField(list, "name")}
                </h4>
                <a
                  href={`https://www.safetyguard.az/safetyguard/${list.certificate}`}
                >
                  <img alt="File" className="h-111 w-11" src={files}></img>
                </a>
              </div>
              <p className=" font-medium text-[#121212] mt-5">
                {t("Artikul")}{" "}
                <span className="font-normal">{list.artikul}</span>
              </p>
              <p className="font-medium mt-4">{t("Brend")}</p>
              <div className="flex items-center gap-2 mt-2">
                {matchingPartner?.image && (
                  <img
                    src={`https://www.safetyguard.az/safetyguard/partners/${matchingPartner.image}`}
                    alt="Brand Logo"
                    className="h-6 md:h-8 object-contain"
                  />
                )}
              </div>

              <p className="font-medium mt-4">{t("Rəng")}</p>
              <div className="flex gap-2 mt-2">
                {list.colors?.map((colorItem, index) => (
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
              <p className="font-medium mt-4">{t("Ölçü")}</p>
              <div className="flex gap-2 mt-2">
                {list.sizes?.map((sizeItem, index) => (
                  <div className="w-[44px] h-[32px] flex items-center justify-center rounded-[14px] border border-[#EBEBEB] bg-white">
                    {sizeItem.name}
                  </div>
                ))}
              </div>
              <a href={`/${currentLanguage}/contact`}>
                <button className="bg-[#FAC211] md:w-[160px] w-full rounded h-[44px] text-[#121212] mt-8">
                  {t("Sifariş et")}
                </button>
              </a>
              <p className="font-medium mt-8">{t("Ətraflı məlumat")}</p>
              <p
                className="mb-9 text-sm md:text-[16px] mt-4 leading-6"
                dangerouslySetInnerHTML={{
                  __html: getLocalizedField(list, "description"),
                }}
              />
            </div>
          </div>
          <Others />
        </div>
      </div>
    </>
  );
}