import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';

SwiperCore.use([Autoplay]);

const Partners = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; 
    const [list, setItems] = useState([]);
  
   useEffect(() => {
    getPartners();
  }, []);


  const getPartners = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/partners.php`,
        { withCredentials: false }
      );
   console.log(response.data.data)
      setItems(response.data.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  return (
    <div className='max-w-containerSm md:max-w-container mx-auto mt-[80px]'>
      <div className='flex md:justify-between justify-center '>
        <div className='flex gap-4 items-center'>
          <div className='w-[39px] h-[2px] bg-[#FAC211]'></div>
          <p className='text-[24px] font-medium'>{t("Tərəfdaşlarımız")}</p>
        </div>
        <a className='hidden md:block' href={`/${currentLanguage}/partners`}>
          <button className='rounded bg-[#FAC211] w-[120px] h-[44px]'>{t("Daha ətraflı")}</button>
        </a>
      </div>

      <div className='mt-8'>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {list.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={`https://www.safetyguard.az/safetyguard/partners/${logo.image}`} alt={`Partner ${index}`} className='h-[66px] w-auto object-contain' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> 
         <a className='block md:hidden' href={`/${currentLanguage}/partners`}>
              <button className='bg-[#FAC211] rounded h-[44px] text-[#121212] w-full mt-6'>{t("Hamısına bax")}</button>
            </a>
    </div>
  );
};

export default Partners;
