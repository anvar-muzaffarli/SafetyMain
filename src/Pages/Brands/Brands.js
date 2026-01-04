// import React, { useEffect, useState } from "react";
// import { breadcrumb } from "../../assets/images";
// import axios from "axios";
// import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";

// const Brands = () => {
//   const [list, setItems] = useState([]);

//   useEffect(() => {
//     getPartners();
//   }, []);

//   const getPartners = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.safetyguard.az/safetyguard/partners.php`,
//         { withCredentials: false }
//       );
//       console.log(response.data.data);
//       setItems(response.data.data);
//     } catch (error) {
//       console.error("Error fetching partners:", error);
//     }
//   };


//   return (
//     <>
//       <div className="bg-[#F9F9F9] pb-[88px] md:pb-[112px]">
//         <div
//           className="bg-black/60"
//           style={{
//             position: "relative",
//             overflow: "hidden",
//             backgroundImage: `url(${breadcrumb})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             width: "100%",
//             height: window.innerWidth < 640 ? "241px" : "241px",
//           }}
//         >
//           <OtherHero title="Partnyorlar" />
//         </div>
//         <div className="max-w-containerSm md:max-w-container mx-auto text-[#121212]">
//           <div className="mt-[48px] md:mt-[80px]">
//             <div className="grid grid-cols-2 md:grid-cols-7 gap-5 mt-[24px] md:mt-[48px]">
//               {list.map((item, index) => (
//                 <div key={index} className="w-full md:w-[148px]">
//                   <img
//                     className="w-full"
//                     src={`https://www.safetyguard.az/safetyguard/partners/${item.image}`}
//                     alt={`Preference ${index + 1}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Brands;


import React, { useEffect, useState } from "react";
import { breadcrumb } from "../../assets/images";
import axios from "axios";
import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Brands = () => {
  const [list, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPartners();
  }, []);

  const getPartners = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/partners.php`,
        { withCredentials: false }
      );
      setItems(response.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching partners:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#F9F9F9] pb-[88px] md:pb-[112px]">

        {/* HERO */}
        <div
          className="bg-black/60"
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${breadcrumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "241px",
          }}
        >
          <OtherHero title="Partnyorlar" />
        </div>

        {/* CONTENT */}
        <div className="max-w-containerSm md:max-w-container mx-auto text-[#121212]">
          <div className="mt-[48px] md:mt-[80px]">

            {/* SEO mətni */}
            <h2 className="text-center text-[20px] md:text-[22px] text-[#666] max-w-2xl mx-auto leading-relaxed">
              Dünyanın aparıcı təhlükəsizlik avadanlığı istehsalçıları ilə əməkdaşlıq edirik.
              Sertifikatlı, yüksək keyfiyyətli və beynəlxalq standartlara uyğun məhsullar təqdim edirik.
            </h2>

            <div className="mt-[32px] md:mt-[48px]">
              {loading ? (
                <p className="text-center">Yüklənir...</p>
              ) : (
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 1500, disableOnInteraction: false }}
                  loop={list.length > 6}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 12 },
                    640: { slidesPerView: 2, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 25 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                  }}
                >
                  {list.map((item, index) => (
                    <SwiperSlide key={index}>
                      <figure
                        className="p-4 bg-white shadow-sm rounded-lg flex items-center justify-center
                                   hover:shadow-md hover:scale-[1.05] transition-all cursor-pointer"
                      >
                        <img
                          loading="lazy"
                          className="w-[85%] md:w-[90%] lg:w-full object-contain 
                                     h-[80px] sm:h-[90px] md:h-[90px] lg:h-[65px]"
                          src={`https://www.safetyguard.az/safetyguard/partners/${item.image}`}
                          alt={`${item.title || "Partnyor"} loqosu`}
                        />
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Brand */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Safety Guard",
          url: "https://www.safetyguard.az/partnyorlar",
          brand: list.map((item) => ({
            "@type": "Brand",
            name: item.title || "Brand",
            logo: `https://www.safetyguard.az/safetyguard/partners/${item.image}`,
          })),
        })}
      </script>
    </>
  );
};

export default Brands;



