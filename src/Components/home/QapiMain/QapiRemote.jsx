
// import React from "react";

// import Remote from "../../../assets/images/JaluzQapi/Remote.PNG";
// import Remote2 from "../../../assets/images/JaluzQapi/Remote2.PNG";

// const QapiRemote = () => {
//   return (
//     <div className="w-full py-10 px-4 md:px-8 lg:py-20">
//       <section className="QapiSection1 flex flex-col md:flex-row gap-8 items-center">

//         {/* Text hissəsi */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:py-16">
//           <h2 className="text-[18px] sm:text-[21px] md:text-[30px] font-semibold leading-tight text-center">
//           Jalüz qapı pultları və qəbulediciləri (və ya beyni)
//           </h2>

//           <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center">
//            Avtomatik qapılar üçün pult və qəbuledici sistemlər jalüz qapıların uzaqdan idarə olunması üçün istifadə olunur. Bu sistemlər stabil radio siqnalı və yüksək təhlükəsizlik kodlaşdırması ilə etibarlı idarəetmə təmin edir. 
//            Avtomatik qapı pultları müxtəlif qapı avtomatikaları ilə uyğun işləyir və asan proqramlanır. Qəbuledici qurğular intensiv istifadə şəraitində uzunmüddətli və sabit performans göstərir. Sənaye obyektləri, anbarlar və
//             kommersiya məkanları üçün ideal həll hesab olunur. Avtomatik qapı aksesuarları kateqoriyasında geniş tətbiq imkanına malikdir.
//           </p>
//         </div>

//         {/* Şəkil hissəsi – hover zoom + ikinci şəkil */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative group overflow-hidden max-w-[300px] md:max-w-[380px] w-full cursor-pointer">

//             {/* Default şəkil */}
//             <img
//               src={Remote}
//               alt="Jalüz qapı pultu"
//               className="w-full h-auto transition-all duration-500 ease-in-out group-hover:scale-110"
//             />

//             {/* Hover zamanı çıxan ikinci şəkil */}
//             <img
//               src={Remote2}
//               alt="Jalüz qapı pultu hover"
//               className="absolute inset-0 w-full h-full object-contain opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110"
//             />

//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default QapiRemote;


import React from "react";
import { useTranslation } from "react-i18next"; // 1. Hook-u import et
import Remote from "../../../assets/images/JaluzQapi/Remote.PNG";   // ağ pult
import Remote2 from "../../../assets/images/JaluzQapi/Remote2.PNG"; // qara pult

const QapiRemote = () => {
  const { t } = useTranslation(); // 2. "t" funksiyasını təyin et

  return (
    <div className="w-full py-10 px-4 md:px-8 lg:py-20">
      <section className="QapiSection1 flex flex-col md:flex-row gap-8 items-center">

        {/* Text hissəsi */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:py-16">
          <h2 className="text-[18px] sm:text-[21px] md:text-[30px] font-semibold leading-tight text-center">
            {t("remote_title")} {/* 3. Tərcüməni tətbiq et */}
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center">
            {t("remote_description")} {/* 4. Tərcüməni tətbiq et */}
          </p>
        </div>

        {/* Şəkil hissəsi */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group overflow-hidden max-w-[300px] md:max-w-[380px] w-full cursor-pointer">

            {/* DEFAULT — QARA PULT */}
            <img
              src={Remote2}
              alt={t("remote_title")}
              className="
                w-full h-auto
                transition-all duration-500 ease-in-out
                group-hover:opacity-0 group-hover:scale-105
              "
            />

            {/* HOVER — AĞ PULT */}
            <img
              src={Remote}
              alt={t("remote_title")}
              className="
                absolute inset-0
                w-full h-full object-contain
                opacity-0
                transition-all duration-500 ease-in-out
                group-hover:opacity-100 group-hover:scale-105
              "
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default QapiRemote;
