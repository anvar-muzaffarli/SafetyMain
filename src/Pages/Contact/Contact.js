import React, { useEffect, useState } from "react";
import {
  breadcrumb,
  contact1,
  contact2,
  contact3,
  contact4,
  contact5,
  contact6,
} from "../../assets/images";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language; 
  const { id } = useParams();
  const [single, setSingle] = useState(null);

  useEffect(() => {
    const getSeoTags = async () => {
      try {
        const response = await axios.get(
          "https://www.safetyguard.az/safetyguard/seoTagsContact.php"
        );
        const data = response.data.data || [];

        setSingle(data[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getSeoTags();
  }, [id]);

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase]; 
  };

  const [settings, setSettings] = useState([]);

  const getSettings = async () => {
    try {
      const response = await axios.get(
        "https://www.safetyguard.az/safetyguard/settings.php"
      );
      console.log(response.data.data);
      setSettings(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <>
      {single && (
        <Helmet>
          <title>{getLocalizedField(single, "meta_tag_title")}</title>
          <meta
            name="description"
            content={getLocalizedField(single, "meta_tag_description")}
          />
          <meta
            name="keywords"
            content={getLocalizedField(single, "meta_tag_keywords")}
          />
        </Helmet>
      )}
      <div className="bg-[#F9F9F9] pb-[128px] md:pb-[280px] text-[#121212]">
        <div
          className="bg-black/60"
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${breadcrumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "241px",
          }}
        >
          <OtherHero title="Əlaqə" />
        </div>

        <div className="mt-[57px] md:max-w-container max-w-containerSm mx-auto  ">
          <div className="md:flex justify-between">
            <div className="md:w-[224px] ">
              <div>
                <div className="space-y-4">
                  <div>
                    <div className="gap-2 flex">
                      <img alt="Location" className="h-6 w-6" src={contact1}></img>
                      <p className="text-[18px] font-medium font-titleFont">
                        {t("Ünvan")}
                      </p>
                    </div>
                    <p className="mt-2">{t(settings?.location)}</p>
                  </div>
                  <div>
                    <div className="gap-2 flex mt-4">
                      <img alt="Mobile" className="h-6 w-6" src={contact2}></img>
                      <p className="text-[18px] font-medium font-titleFont">
                        {t("Əlaqə nömrəsi")}
                      </p>
                    </div>
                    <p className="mt-2">{settings?.mobile1}</p>
                    <p className="mt-2">{settings?.mobile2}</p>
                  </div>
                  <div>
                    <div className="gap-2 flex mt-4">
                      <img alt="Email" className="h-6 w-6" src={contact3}></img>
                      <p className="text-[18px] font-medium font-titleFont">
                        {t("E-poçt")}
                      </p>
                    </div>
                    <p className="mt-2">{settings?.email}</p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a href={`${settings?.facebook}`}>
                      <img alt="Facebook" className="w-[44px] h-[44px]" src={contact4}></img>
                    </a>
                    <a href={`${settings?.instagram}`}>
                      <img alt="Instagram" className="w-[44px] h-[44px]" src={contact5}></img>
                    </a>
                    <a href={`${settings?.tiktok}`}>
                      <img alt="Tiktok" className="w-[44px] h-[44px]" src={contact6}></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[966px] mt-[56px] md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1739964667403!5m2!1saz!2saz"
                style={{ width: window.innerWidth < 640 ? "100%" : "966px" }}
                height="389"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
