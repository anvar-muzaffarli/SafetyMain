// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay"; // optional, amma bəzi stillər üçün saxla
// import { Autoplay, Pagination, Navigation } from "swiper/modules";


// const QapiSwiper = () => {
//   return (
//     <div className="w-full max-w-5xl mx-auto px-4">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={20}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {[1, 2, 3, 4, 5].map((i) => (
//           <SwiperSlide key={i}>
//             <img
//               src="https://safeunion.az/wp-content/uploads/Isci-geyimi-SF0368.jpg"
//               alt={`Slide ${i}`}
//               className="w-full h-[250px] object-cover rounded-xl"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default QapiSwiper;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import agQapi from "../../../assets/images/JaluzQapi/agQapi.jpeg";
import qaraQapi from "../../../assets/images/JaluzQapi/qaraQapi2.jpeg";
import qehveyiQapi from "../../../assets/images/JaluzQapi/qehveyiQapi.jpeg";
import bejQapi from "../../../assets/images/JaluzQapi/sudQapi2.jpeg";
import goyQapi from "../../../assets/images/JaluzQapi/goyQapi.jpeg";

const images = [
  agQapi,
  qaraQapi,
  qehveyiQapi,
  bejQapi,
  goyQapi,
];

const QapiSwiper = () => {
  return (
    <div className="py-20 w-full max-w-5xl mx-auto px-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 12, // mobil boşluq
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20, // tablet
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32, // desktop
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <img
                src={src}
                alt={`jaluz qapilar ${index + 1}`}
                className="w-full h-[360px] object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QapiSwiper;



