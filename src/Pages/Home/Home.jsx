// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import axios from "axios";
// import { Helmet } from "react-helmet";
// import Categories from "../../Components/home/Categories/Categories";
// import Hero from "../../Components/home/Hero/Hero";
// import About from "../../Components/home/About/About";
// import BestProducts from "../../Components/home/BestProducts/BestProducts";


// import Partners from "../../Components/home/Partners/Partners";
// import Contact from "../../Components/home/Contact/Contact";
// import Qapi from "../Qapi/Qapi";

// const Home = () => {
//   const { i18n } = useTranslation();

//   const currentLanguage = i18n.language; 
//   const [single, setSingle] = useState(null);

//   useEffect(() => {
//     const getSeoTags = async () => {
//       try {
//         const response = await axios.get(
//           "https://www.safetyguard.az/safetyguard/seoTagsHome.php"
//         );
//         const data = response.data.data || [];

//         setSingle(data[0]);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     getSeoTags();
//   }, []);

//   const getLocalizedField = (item, fieldBase) => {
//     if (currentLanguage === "en")
//       return item[`${fieldBase}En`] || item[fieldBase];
//     if (currentLanguage === "ru")
//       return item[`${fieldBase}Ru`] || item[fieldBase];
//     return item[fieldBase];
//   };

//   return (
//     <>
//       {single && (
//         <Helmet>
//           <title>{getLocalizedField(single, "meta_tag_title")}</title>
//           <meta
//             name="description"
//             content={getLocalizedField(single, "meta_tag_description")}
//           />
//           <meta
//             name="keywords"
//             content={getLocalizedField(single, "meta_tag_keywords")}
//           />
//         </Helmet>
//       )}
//       <div className="bg-[#F9F9F9]">
//         <div className="pb-[88px] md:pb-[112px] flex justify-between max-w-containerSm md:max-w-container mx-auto">
//           <div className="w-[280px] hidden md:block">
//             <Categories />
//           </div>
//           <div className="md:w-[977px]">
//             <Hero />
//             <Qapi/>
//             <BestProducts />
//             <About />
//             <Partners />
//             <Contact />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;






// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import axios from "axios";
// import { Helmet } from "react-helmet";
// import Categories from "../../Components/home/Categories/Categories";
// import Hero from "../../Components/home/Hero/Hero";
// import About from "../../Components/home/About/About";
// import Partners from "../../Components/home/Partners/Partners";
// import Contact from "../../Components/home/Contact/Contact";
// import Qapi from "../Qapi/Qapi";
// import BestProductsPage from "../BestProductsPage/BestProductsPage";

// const Home = () => {
//   const { i18n } = useTranslation();
//   const currentLanguage = i18n.language;
//   const [single, setSingle] = useState(null);

//   useEffect(() => {
//     const getSeoTags = async () => {
//       try {
//         const response = await axios.get(
//           "https://www.safetyguard.az/safetyguard/seoTagsHome.php"
//         );
//         const data = response.data.data || [];
//         setSingle(data[0]);
//       } catch (error) {
//         console.error("Error fetching seo:", error);
//       }
//     };

//     getSeoTags();
//   }, []);

//   const getLocalizedField = (item, fieldBase) => {
//     if (currentLanguage === "en")
//       return item[`${fieldBase}En`] || item[fieldBase];
//     if (currentLanguage === "ru")
//       return item[`${fieldBase}Ru`] || item[fieldBase];
//     return item[fieldBase];
//   };

//   return (
//     <>
//       {single && (
//         <Helmet>
//           <title>{getLocalizedField(single, "meta_tag_title")}</title>
//           <meta
//             name="description"
//             content={getLocalizedField(single, "meta_tag_description")}
//           />
//           <meta
//             name="keywords"
//             content={getLocalizedField(single, "meta_tag_keywords")}
//           />
//         </Helmet>
//       )}

//       <div className="bg-[#F9F9F9]">
//         <div className="pb-[88px] md:pb-[112px] flex justify-between max-w-containerSm md:max-w-container mx-auto">
//           <div className="w-[280px] hidden md:block">
//             <Categories />
//           </div>

//           <div className="md:w-[977px]">
//             <Hero />
//             <Qapi />
//            <BestProductsPage/>
//             {/* BestProducts artıq silindi */}

//             <About />
//             <Partners />
//             <Contact />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;




import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Helmet } from "react-helmet";
import Categories from "../../Components/home/Categories/Categories";
import Hero from "../../Components/home/Hero/Hero";
import About from "../../Components/home/About/About";
import Partners from "../../Components/home/Partners/Partners";
import Contact from "../../Components/home/Contact/Contact";
import Qapi from "../Qapi/Qapi";
import BestProductsPage from "../BestProductsPage/BestProductsPage";
import BestOffer from "../BestOffers/BestOffer";

const Home = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [single, setSingle] = useState(null);

  // ... (SEO funksiyaları eyni qalır)

  useEffect(() => {
    const getSeoTags = async () => {
      try {
        const response = await axios.get(
          "https://www.safetyguard.az/safetyguard/seoTagsHome.php"
        );
        const data = response.data.data || [];
        setSingle(data[0]);
      } catch (error) {
        console.error("Error fetching seo:", error);
      }
    };

    getSeoTags();
  }, []);

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase];
  };

  return (
    <>
      {single && (
        <Helmet>
          <title>{getLocalizedField(single, "meta_tag_title")}</title>
          <meta
            name="description"
            content={getLocalizedField(single, "meta_tag_description")}
          />
          <meta
            name="keywords"
            content={getLocalizedField(single, "meta_tag_keywords")}
          />
        </Helmet>
      )}

      <div className="bg-[#F9F9F9] w-full">

        <div className="pb-[88px] md:pb-[112px] flex justify-between max-w-containerSm md:max-w-container mx-auto px-4 sm:px-6 md:px-0">
          
          <div className="w-[280px] hidden md:block">
            <Categories />
          </div>

          {/* Əsas Kontent Bloku (Hero, Products, About, etc.) */}
          <div className="w-full md:w-[977px]"> 
            <Hero />
            
               <Qapi />
            <div className="w-full">
               <BestProductsPage/>
            </div>
    <BestOffer/>
            <About />
            <Partners />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;