import React, { useEffect, useState } from "react";
import {
  aboveHeader1,
  aboveHeader2,
  aboveHeader3,
  aboveHeader4,
  aboveHeader5,
  aboveHeader6,
  logo,
} from "../../assets/images";
import axios from "axios";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const AboveHeader = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language; 
  const [item, setItem] = useState([]);

  useEffect(() => {
    getSettings();
  }, []);

  const getSettings = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/settings.php`,
        { withCredentials: false }
      );
      console.log(response.data.data);
      setItem(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="h-[78px] max-w-containerSm md:max-w-container mx-auto hidden md:flex justify-between items-center text-[#121212]">
      <div className="w-[177px]">
        <a href={`/${currentLanguage}`}>
          <img alt="Logo" className="w-full" src={logo}></img>
        </a>
      </div>
      <div className="flex">
        <div className="flex gap-3 items-center">
          <img alt="Mobile" src={aboveHeader1} className="w-4"></img>
          <p>
            {item.mobile1} {item.mobile2}
          </p>
        </div>
        <div className="w-[1px] h-[22px] bg-[black] mx-3"></div>
        <div className="flex gap-3 items-center mr-8">
          <img alt="Email" src={aboveHeader2} className="w-4"></img>
          <p>{item.email}</p>
        </div>
        <div className="flex gap-3 items-center mr-5">
          <a href={item.facebook}>
            <img alt="Fcabeook" className="w-[18px] h-[18px]" src={aboveHeader3}></img>
          </a>
          <a href={item.instagram}>
            <img alt="Instagram" className="w-[18px] h-[18px]" src={aboveHeader4}></img>
          </a>
          <a href={item.tiktok}>
            <img alt="Tiktok" className="w-[18px] h-[18px]" src={aboveHeader5}></img>
          </a>
          <a href={item.youtube}>
            <img alt="YouTube" className="w-[18px] h-[18px]" src={aboveHeader6}></img>
          </a>
        </div>
        <LanguageSwitcher />
      </div>

      {/* <h1>logo eleve et yen</h1> */}
    </div>
  );
};

export default AboveHeader;
