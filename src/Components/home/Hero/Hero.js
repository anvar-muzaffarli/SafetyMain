// import React from "react";
// import { hero1 } from "../../../assets/images";
// import { useTranslation } from "react-i18next";

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="pt-6">
//       <div className="relative w-full h-[432px] ">
//         <img
//           src={hero1}
//           alt="Hero"
//           className="w-full h-[432px] object-cover rounded-lg"
//         />

//         <div className="absolute inset-0 flex flex-col  justify-center text-[#121212] pl-4 md:pl-10 w-[300px] md:w-[387px]">
//           <h1 className="text-[24px] md:text-[40px] font-semibold">
//             {t("Təhlükəsizlik Sizdən Başlayır ")}
//           </h1>
//           <p className="text-[14px] mt-3">
//             {t(
//               "Peşəkar təhlükəsizlik avadanlıqları, xüsusi geyimlər və uniformalarla təhlükəsiz iş mühitini təmin edin. “Safety Guard” – etibar edilən keyfiyyət və rahatlıq.     "
//             )}
//           </p>
//           <a href="/about">
//             <button className="rounded bg-[#FAC211] w-[120px] h-[44px] mt-10">
//               {t("Haqqımızda")}
//             </button>
//           </a>
//         </div>
//       </div>  
//     </div>
//   );
// };

// export default Hero;



// import React from "react";
// import { hero1 } from "../../../assets/images";
// import { useTranslation } from "react-i18next";

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="pt-6">
//       <div className="relative w-full h-[360px] sm:h-[400px] md:h-[432px]">
//         <img
//           src={hero1}
//           alt="Hero"
//           className="
//             w-full 
//             h-[360px] sm:h-[400px] md:h-[432px]
//             object-cover 
//             
//             /* ✅ IMAGE DÜZƏLİŞİ: object-position dəyərləri */
//             object-[70%_center]     /* Mobile (Default) */
//             sm:object-[85%_center]  /* Planşet (sm) */
//             md:object-[97%_center]  /* Desktop (md) */
//             
//             rounded-lg
//           "
//         />

//         <div className="
//             absolute inset-0 flex flex-col justify-center
//             text-[#121212] 
//             pl-4 sm:pl-6 md:pl-10 
//             w-[250px] sm:w-[300px] md:w-[387px]
//         ">

//           <h1
//             className="
//               text-[20px]        /* Mobil */
//               sm:text-[28px]     /* Planşet */
//               md:text-[40px]     /* Desktop */
//               font-semibold 
//               leading-tight
//             "
//           >
//             {t("Təhlükəsizlik Sizdən Başlayır ")}
//           </h1>

//           <p
//             className="
//     mt-3 
//     text-[16px]           
//     sm:text-[20px]       
//     md:text-[18px]     
//     leading-snug md:leading-normal
//   "
//           >
//             {t(
//               "Peşəkar təhlükəsizlik avadanlıqları, xüsusi geyimlər və uniformalarla təhlükəsiz iş mühitini təmin edin. “Safety Guard” – etibar edilən keyfiyyət və rahatlıq."
//             )}
//           </p>

//           <a href="/about">
//             <button
//               className="
//                 mt-6 md:mt-10 
//                 rounded bg-[#FAC211] 
//                 w-[110px] h-[38px]        /* Mobil */
//                 sm:w-[120px] sm:h-[42px]  /* Planşet */
//                 md:w-[130px] md:h-[44px]  /* Desktop */
//                 text-[13px] sm:text-[14px] md:text-[15px]
//               "
//             >
//               {t("Haqqımızda")}
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { hero1 } from "../../../assets/images";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-6">
      {/* ⭐ DÜZƏLİŞ 1: Şəkil və mətni alt-alta yığmaq üçün flex-col istifadə olunur. 
          Böyük ekranlarda (md:) şəkilin üzərinə yazmaq üçün konteynerin özü 'relative' qalır. 
      */}
      <div className="flex flex-col md:relative"> 
        
        {/* Şəkil Konteyneri: Mobil üçün hündürlüyü təyin edir, çünki o, yuxarıda qalır. */}
        <div className="relative w-full h-[360px] sm:h-[400px] md:h-[432px]"> 
          <img
            src={hero1}
            alt="Hero"
            className="
              w-full 
              h-[360px] sm:h-[400px] md:h-[432px]
              object-cover 
              rounded-lg
              
              /* Image Position (Düzgün qalır) */
              object-[70%_center]
              sm:object-[85%_center]
              md:object-[97%_center]
            "
          />
        </div>

        {/* ⭐ DÜZƏLİŞ 2: Mətn Bloku. 
            Mobil (default) statikdir, padding (p-4) ilə kənar boşluq alır.
            Desktop (md:) absolute mövqeyə qayıdır.
        */}
        <div className="
            /* Mobil Stili (Default): Normal axın, padding verilir */
            p-4 
            w-full 
            text-[#121212] 
            
            /* Desktop Stili (md:) */
            md:absolute md:inset-0 md:flex md:flex-col md:justify-center
            md:pl-10 
            md:w-[387px]
            
            /* Mobil görünüşdə mətnin enini məhdudlaşdırmaq istəmirik */
            sm:w-full md:w-[387px] 
            sm:pl-6 md:pl-10
        ">

          <h1
            className="
              text-[20px]        
              sm:text-[28px]     
              md:text-[40px]     
              font-semibold 
              leading-tight
            "
          >
            {t("Təhlükəsizlik Sizdən Başlayır ")}
          </h1>

          <p
            className="
              mt-3 
              text-[16px]           
              sm:text-[20px]       
              md:text-[18px]     
              leading-snug md:leading-normal
            "
          >
            {t(
              "Peşəkar təhlükəsizlik avadanlıqları, xüsusi geyimlər və uniformalarla təhlükəsiz iş mühitini təmin edin. “Safety Guard” – etibar edilən keyfiyyət və rahatlıq."
            )}
          </p>

          <a href="/about">
            <button
              className="
                mt-6 md:mt-10 
                rounded bg-[#FAC211] 
                w-[110px] h-[38px]        
                sm:w-[120px] sm:h-[42px]  
                md:w-[130px] md:h-[44px]  
                text-[13px] sm:text-[14px] md:text-[15px]
              "
            >
              {t("Haqqımızda")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;














