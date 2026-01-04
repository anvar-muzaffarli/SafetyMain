// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import axios from "axios";
// import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const BestProducts = () => {
//   const { t, i18n } = useTranslation();
//   const currentLanguage = i18n.language; 
//   const [list, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showText, setShowText] = useState(false);
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.safetyguard.az/safetyguard/dashboard.php`,
//         { withCredentials: false }
//       );

//       const filteredProducts = response.data.data.filter(
//         (product) => product.isBestseller != 0
//       );
//       const limitedData = filteredProducts?.slice(0, 4);

//       console.log(limitedData);
//       setItems(limitedData);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   if (isLoading) {
//     return <p className="text-center text-[white]">Loading...</p>;
//   }

//   return (
//     <div className="max-w-containerSm md:max-w-containerHome mx-auto mt-[48px] md:mt-[34px] text-[#121212]">
//       <div className="flex md:justify-between justify-center ">
//         <div className="flex gap-4 items-center">
//           <div className="w-[39px] h-[2px] bg-[#FAC211]"></div>
//           <p className="text-[24px] font-medium">{t("Ən çox satılanlar")}</p>
//         </div>
//         <a className="hidden md:block" href={`/${currentLanguage}/products`}>
//           <button className="rounded bg-[#FAC211] w-[120px] h-[44px]">
//             {t("Daha ətraflı")}
//           </button>
//         </a>
//       </div>
//       <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
//         {list.map((product) => {
//           return (
//             <ProductCard
//               id={product.id}
//               name={product.name}
//               nameEn={product.nameEn}
//               artikul={product.artikul}
//               category={product.category}
//               colors={product.colors}
//               brand={product.brand}
//               sizes={product.sizes}
//               isNew={product.isNew}
//               description={product.description}
//               descriptionEn={product.descriptionEn}
//               isBestseller={product.isBestseller}
//               certificate={product.certificate}
//               image1={product.image1}
//               image2={product.image2}
//               image3={product.image3}
//               image4={product.image4}
//               image5={product.image5}
//             />
//           );
//         })}
//       </div>
//       <div className="block md:hidden mt-[48px] ">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           onSlideChange={(swiper) => {
//             setShowText(false);
//             setShowButton(false);
//             setActiveIndex(swiper.activeIndex);
//           }}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {list.map((product, index) => {
//             return (
//               <SwiperSlide key={index}>
//                 <ProductCard
//                   id={product.id}
//                   name={product.name}
//                   nameEn={product.nameEn}
//                   artikul={product.artikul}
//                   category={product.category}
//                   colors={product.colors}
//                   brand={product.brand}
//                   sizes={product.sizes}
//                   isNew={product.isNew}
//                   description={product.description}
//                   descriptionEn={product.descriptionEn}
//                   isBestseller={product.isBestseller}
//                   certificate={product.certificate}
//                   image1={product.image1}
//                   image2={product.image2}
//                   image3={product.image3}
//                   image4={product.image4}
//                   image5={product.image5}
//                 />
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>

//       <a className="block md:hidden" href={`/${currentLanguage}/products`}>
//         <button className="bg-[#FAC211] rounded h-[44px] text-[#121212] w-full mt-6">
//           {t("Hamısına bax")}
//         </button>
//       </a>
//     </div>
//   );
// };

// export default BestProducts;






import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ProductCard from "../../Components/home/BestProducts/ProductCard";

const BestProductsPage = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBestProducts();
  }, []);

  const fetchBestProducts = async () => {
    try {
      const response = await axios.get(
        "https://www.safetyguard.az/safetyguard/dashboard.php"
      );

      const filtered = response.data.data.filter(
        (item) => item.isBestseller != 0
      );

      setList(filtered);
      setLoading(false);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">
        {t("Ən çox satılan məhsullar")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {list.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            nameEn={product.nameEn}
            nameRu={product.nameRu}
            isNew={product.isNew}
            colors={product.colors}
            image1={product.image1}
          />
        ))}
      </div>
    </div>
  );
};

export default BestProductsPage;

