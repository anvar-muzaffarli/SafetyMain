// import React from "react";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom"; // ✅ buranı əlavə etdik
// import qapi1 from "../../assets/images/JaluzQapi/qapilar1.jpeg";

// const Qapi = () => {
//   const { t, i18n } = useTranslation(); // ✅ i18n burada destructure edilir
//   const navigate = useNavigate();       // ✅ navigate hook-u burada yaradılır

//   return (
//     <div className="pt-6">
//       <div className="flex flex-col md:relative">

//         {/* ŞƏKİL */}
//         <div className="relative w-full h-[360px] sm:h-[400px] md:h-[432px]">
//           <img
//             src={qapi1}
//             alt="Jalüz qapılar"
//             className="
//               w-full
//               h-[360px] sm:h-[400px] md:h-[432px]
//               object-cover
//               rounded-lg
//               object-center
//               md:object-[100%_center]
//             "
//           />
//         </div>

//         {/* MƏTN BLOKU */}
//         <div
//           className="
//             p-4
//             w-full
//             text-[#121212]

//             md:absolute md:inset-0 md:flex md:flex-col md:justify-center
//             md:pl-10
//             md:w-[420px]

//             sm:w-full md:w-[420px]
//             sm:pl-6 md:pl-10
//           "
//         >
//           <h1
//             className="
//               text-[20px]
//               sm:text-[28px]
//               md:text-[40px]
//               font-semibold
//               leading-tight
//             "
//           >
//             {t("Jalüz qapılar")}
//           </h1>

//           <p
//             className="
//               mt-3
//               text-[16px]
//               sm:text-[20px]
//               md:text-[18px]
//               leading-snug md:leading-normal
//             "
//           >
//             {t(
//               "Müasir dizaynlı və dayanıqlı jalüz qapılar ilə obyektlərinizi, anbar və sənaye sahələrinizi etibarlı şəkildə qoruyun."
//             )}
//           </p>

//           {/* 🔁 PROFESSIONAL BUTTON: navigate ilə yönləndirmə */}
//           <button
//             onClick={() => navigate(`/${i18n.language}/qapilar`)}
//             className="
//               mt-6 md:mt-10
//               rounded bg-[#FAC211]
//               w-[110px] h-[38px]
//               sm:w-[120px] sm:h-[42px]
//               md:w-[140px] md:h-[44px]
//               text-[13px] sm:text-[14px] md:text-[15px]
//             "
//           >
//             {t("Haqqımızda")}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Qapi;




import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import qapi1 from "../../assets/images/JaluzQapi/qapilar1.jpeg";

const Qapi = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="pt-6">
      <div className="flex flex-col relative">

        {/* ŞƏKİL */}
<div className="relative w-full h-[300px] sm:h-[400px] md:h-[432px] lg:h-[480px]">
  <img
    src={qapi1}
    alt="jaluz qapi"
    className="
      w-full
      h-full
      object-cover
      rounded-lg

      /* Focus nöqtəsi */
      object-[100%_center]      /* ortala */
      sm:object-[95%_center]   /* sm ekran */
      md:object-[100%_center]   /* md ekran */
    "
  />
</div>


        {/* MƏTN BLOKU */}
        <div
          className="
            p-4
            w-full
            text-[#121212]

            md:absolute md:inset-y-0 md:flex md:flex-col md:justify-center
            md:pl-6 md:w-[400px]

            sm:pl-6 md:pl-10
          "
        >
          <h1 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight">
            {t("Jalüz qapılar")}
          </h1>

          <p className="mt-3 text-[16px] sm:text-[18px] md:text-[18px] leading-snug md:leading-normal">
            {t(
              "Müasir dizaynlı və dayanıqlı jalüz qapılar ilə obyektlərinizi, anbar və sənaye sahələrinizi etibarlı şəkildə qoruyun."
            )}
          </p>

          <button
            onClick={() => navigate(`/${i18n.language}/qapilar`)}
            className="
              mt-6 md:mt-10
              rounded bg-[#FAC211]
              w-[120px] h-[38px]
              sm:w-[130px] sm:h-[42px]
              md:w-[140px] md:h-[44px]
              text-[13px] sm:text-[14px] md:text-[15px]
            "
          >
            {t("Haqqımızda")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qapi;






