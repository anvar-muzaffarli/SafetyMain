// import React from "react";
// import qapi2 from "../../../assets/images/JaluzQapi/qapipin.jpeg";
// import QapiSwiper from "./QapiSwiper";
// import QapiRemote from "./QapiRemote";
// import QapiVideo from "./QapiVideo";

// const QapiMain = () => {
//   return (
//     <div className="w-full py-10 px-4 md:px-8 lg:py-20">
//       <section className="QapiSection1 flex flex-col md:flex-row gap-8 items-start">
//         <div className="w-full md:w-1/2 flex justify-center ">
//           <img src={qapi2} alt="Jalüz qapılar" className="" />
//         </div>

//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:py-16">
//           <h2 className="text-[18px] sm:text-[21px] md:text-[30px] font-semibold leading-tight text-center">
//             Jalüz qapılar – təhlükəsiz və müasir qapı sistemləri
//           </h2>
//           <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center">
//   Jalüz qapı (roll-up qapı) yuxarıya doğru yığılan, metal konstruksiyalı müasir qapı sistemidir. Mağaza, anbar, qaraj və digər kommersiya obyektləri üçün təhlükəsiz və funksional həll hesab olunur <br/> 
//   Jalüz qapılar möhkəm mexanizmi sayəsində obyektləri icazəsiz girişlərdən qoruyur. Paslanmaya davamlı materiallardan istehsal edildiyi üçün uzunömürlüdür və açıq hava şəraitinə tam uyğundur. Az yer tutması isə kiçik və dar məkanlarda istifadəsini daha da rahat edir.
//           </p>
//         </div>

//       </section>
// <QapiSwiper/>
//  <QapiRemote/>   
//  <QapiVideo/>
//     </div>
//   );
// };


// export default QapiMain;



import React from "react";
import { useTranslation } from "react-i18next"; // 1. Hook-u import et
import qapi2 from "../../../assets/images/JaluzQapi/qapipin.jpeg";
import QapiSwiper from "./QapiSwiper";
import QapiRemote from "./QapiRemote";
import QapiVideo from "./QapiVideo";
import QapiHesab from "./QapiHesab";

const QapiMain = () => {
  const { t } = useTranslation(); // 2. "t" funksiyasını təyin et

  return (
    <div className="w-full py-10 px-4 md:px-8 lg:py-20">
      <section className="QapiSection1 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={qapi2} alt="Jalüz qapılar" className="" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 md:py-16">
          <h2 className="text-[18px] sm:text-[21px] md:text-[30px] font-semibold leading-tight text-center">
            {t("qapi_title")} {/* 3. Statik mətni "t" funksiyası ilə əvəz et */}
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg text-center">
            {t("qapi_description_1")} <br/> <br/>
            {t("qapi_description_2")}
          </p>
        </div>
      </section>
      <QapiSwiper/>
      <QapiRemote/>   
      <QapiVideo/>
      <QapiHesab/>
    </div>
  );
};

export default QapiMain;



