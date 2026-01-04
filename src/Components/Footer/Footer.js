import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  footer6,
  logoFooter,
} from "../../assets/images";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; 
  const [settings, setSettings] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/categories.php`,
        { withCredentials: false }
      );
      const limitedData = response.data.data.slice(0, 6);
      setCategories(limitedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getSettings = async () => {
    try {
      const response = await axios.get(
        "https://www.safetyguard.az/safetyguard/settings.php"
      );
      setSettings(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSettings();
    getCategories();
  }, []);

  return (
    <>
      <footer className="pt-[60px] pb-[40px] bg-[#181818] text-white flex justify-center item-center ">
        <div className="md:max-w-container max-w-containerSm mx-auto md:flex justify-between gap-8 pb-[54px]">
          <div className="md:w-[207px] md:mr-[257px]">
            <div>
              <a href="/">
                <img alt="Logo" className="w-[177px]" src={logoFooter}></img>
              </a>
            </div>
            <p className="text-[16px] mt-8">
              {t("Təhlükəsizlik Sizdən Başlayır")}
            </p>
            <div className="flex gap-3 mt-8">
              <a href={`${settings.whatsapp}`}>
                <img alt="Whatsapp" className="w-[28px] h-[28px]" src={footer1}></img>
              </a>
              <a href={`${settings.instagram}`}>
                <img alt="Instagram" className="w-[28px] h-[28px]" src={footer2}></img>
              </a>
              <a href={`${settings.facebook}`}>
                <img alt="Facebook" className="w-[28px] h-[28px]" src={footer3}></img>
              </a>
            </div>
          </div>
          <div className="md:w-[128px] md:mr-[120px] mt-[64px] md:mt-0">
            <p className="text-lg font-medium">{t("Sürətli keçid")}</p>
            <div className="space-y-4 mt-6">
              <div></div>
              <div>
                <a href={`/${currentLanguage}/about`}>
                  <div>
                    <p>{t("Haqqımızda")}</p>
                  </div>
                </a>
              </div>
              <div>
                <a href={`/${currentLanguage}/partners`}>
                  <div>
                    <p>{t("Partnyorlar")}</p>
                  </div>
                </a>
              </div>
              <div>
                <a href={`/${currentLanguage}/services`}>
                  <div>
                    <p>{t("Xidmətlər")}</p>
                  </div>
                </a>
              </div>
              <div>
                <a href={`/${currentLanguage}/blogs`}>
                  <div>
                    <p>{t("Bloq")}</p>
                  </div>
                </a>
              </div>
              <div>
                <a href={`/${currentLanguage}/contact`}>
                  <div>
                    <p>{t("Əlaqə")}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[179px] md:mr-[120px] mt-[64px] md:mt-0">
            <p className="text-lg font-medium">{t("Kateqoriyalar")}</p>
            <div className="space-y-4 mt-6">
              {categories.map((category) => (
                <div key={category.id}>
                  <a
                    href={`/${currentLanguage}/products?categories=${category.name}`}
                  >
                    <div>
                      <p>{t(category.name)}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[308px] md:flex mt-[64px] md:mt-0">
            <div>
              <h4 className="text-lg">{t("Əlaqə")}</h4>
              <div className="space-y-4 mt-6">
                <div>
                  <div className="gap-2 flex">
                    <img alt="Location" className="h-6 w-6" src={footer4}></img>
                    <p>{t(settings.location)}</p>
                  </div>
                </div>
                <div>
                  <div className="gap-2 flex">
                    <img alt="Email" className="h-6 w-6" src={footer5}></img>
                    <p>{settings.email}</p>
                  </div>
                </div>
                <div>
                  <div className="gap-2 flex">
                    <img alt="Mobile" className="h-6 w-6" src={footer6}></img>
                    <div>
                      <p>{settings.mobile1}</p>
                      <p>{settings.mobile2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#181818]">
        <div className="bg-[#898989] h-[1px] w-full max-w-containerSm md:max-w-container mx-auto"></div>
      </div>

      <div className="bg-[#181818]">
        <div className="max-w-containerSm md:max-w-container md:flex justify-between mx-auto py-4 text-sm text-white">
          <p>Safety Guard.az © {t("Bütün hüquqlar qorunur.")}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
