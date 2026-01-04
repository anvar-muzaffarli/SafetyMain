import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogVideo = () => {
  return (
    <div className="w-full py-10 px-4 md:px-8">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full max-w-3xl mx-auto"
      >
        {/* VIDEO 1 */}
        <SwiperSlide>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/JZ9VowMa0cc"
              title="Blog Short Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SwiperSlide>

        {/* VIDEO 2 */}
        <SwiperSlide>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BaSRFd3oIbM"
              title="Blog Short Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SwiperSlide>

        {/* VIDEO 3 */}
        <SwiperSlide>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xVf-PJYFmvI"
              title="Blog Short Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogVideo;


