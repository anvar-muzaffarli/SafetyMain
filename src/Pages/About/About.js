import React, { useEffect, useState } from "react";
import {
  about3,
  about4,
  breadcrumb,
  preferences1,
  preferences2,
  preferences3,
} from "../../assets/images";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";

const About = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language; 
  const { id } = useParams();
  const [single, setSingle] = useState(null);

  useEffect(() => {
    const getSeoTags = async () => {
      try {
        const response = await axios.get(
          "https://www.safetyguard.az/safetyguard/seoTagsAbout.php"
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
      <div className="bg-[#F9F9F9] pb-[88px] md:pb-[112px] text-[#121212]">
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
            height: window.innerWidth < 640 ? "241px" : "241px",
          }}
        >
          <OtherHero title="Haqqımızda" />
        </div>
        <div className="max-w-containerSm md:max-w-container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between mt-[48px] md:mt-[88px]">
            <div className="md:w-[554px]  mt-[32px] md:mt-0">
              <img src={about3} alt="About" />
            </div>
            <div className="md:w-[679px]">
              <p className="text-[24px] font-medium">
                {t("«Safety Guard» MMC – Etibarlı Təhlükəsizlik Həlləriniz")}
              </p>
              <p className="mt-6">
                {t(
                  "«Safety Guard» MMC fərdi mühafizə vasitələrinin, işçi geyimlərinin idxalı, istehsalı və satışı sahəsində ixtisaslaşmış bir şirkətdir. Rəsmi olaraq 2024-cü ildən fəaliyyət göstərsək də, komandamızın bu sahədə 10 ildən artıq peşəkar təcrübəsi var. Məqsədimiz – sənaye müəssisələrinə təhlükəsizlik və işçi rahatlığını bir araya gətirən, keyfiyyətli və sertifikatlaşdırılmış məhsullar təqdim etməkdir."
                )}{" "}
                <br></br>
                <br></br>
                {t(
                  "Şirkətimiz Bakı şəhərində yerləşən geniş ofis və sərgi salonu ilə yanaşı, müasir texnologiyalarla təchiz olunmuş istehsalat sahəsi və iri anbar infrastrukturu ilə müştərilərə xidmət göstərir."
                )}
              </p>
            </div>
          </div>

          <div className="mt-[48px] md:mt-[80px]">
            <p className="text-[24px] font-medium text-firstColor text-center">
              {t("Üstünlüklərimiz")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[24px] md:mt-[48px]">
              <div className="w-full md:w-[413px]">
                <img alt="Preferences" className="w-full" src={preferences1}></img>
                <div className="border border-[#FAC211] rounded-b-lg h-[84px] bg-white">
                  <div className="w-[282px] mx-auto text-center py-2">
                    <p className="text-[#D06B00]">
                      {t("Yerli və İdxal Məhsullar")}
                    </p>
                    <p className="text-[14px]">
                      {t(
                        "Sertifikatlı və Avropa standartlarına uyğun məhsul çeşidi"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[413px]">
                <img alt="Preferences" className="w-full" src={preferences2}></img>
                <div className="border border-[#FAC211] rounded-b-lg h-[84px] bg-white">
                  <div className="w-[282px] mx-auto text-center py-2">
                    <p className="text-[#D06B00]">
                      {t("Sürətli Servis və Operativ Çatdırılma")}
                    </p>
                    <p className="text-[14px]">
                      {t("Geniş stok və səmərəli logistika sistemi")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[413px]">
                <img alt="Preferences" className="w-full" src={preferences3}></img>
                <div className="border border-[#FAC211] rounded-b-lg h-[84px] bg-white">
                  <div className="w-[282px] mx-auto text-center py-2">
                    <p className="text-[#D06B00]">
                      {t("Təhlükəsizlik Standartlarına Uyğunluq")}
                    </p>
                    <p className="text-[14px]">
                      {t(
                        "Hər bir məhsul EN, CE və ISO sertifikatları ilə təmin olunur"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="mt-[48px] md:mt-[80px] py-8 bg-white">
          <div className="max-w-containerSm md:max-w-container mx-auto flex flex-col md:flex-row justify-between ">
            <div className="md:w-[590px] flex justify-center items-center">
              <div>
                <p className="text-[24px] font-medium">
                  {t("Fəaliyyət Sahələrimiz")}
                </p>
                <p className="mt-6">
                  ✔️ {t("Fərdi mühafizə vasitələrinin istehsalı və satışı")}{" "}
                  <br></br>
                  ✔️ {t(
                    "İşçi geyimlərinin (yay/qış) dizaynı və istehsalı"
                  )}{" "}
                  <br></br>
                  ✔️{" "}
                  {t(
                    "Neft, qaz, inşaat, energetika və digər sənaye sahələrinə təchizat"
                  )}{" "}
                  <br></br>
                  ✔️{" "}
                  {t(
                    "Korporativ müəssisələr üçün sifariş əsasında məhsul hazırlığı"
                  )}{" "}
                  <br></br>
                  ✔️ {t("Topdan satış və idxal əməliyyatları")} <br></br>
                </p>
                <p className="mt-6">
                  {t(
                    "Əsas məqsədimiz – müştərilərimizə münasib qiymətlərlə yüksək keyfiyyətli, sertifikatlaşdırılmış məhsullar təqdim etmək, eyni zamanda bazardakı mövcud tendensiyalara və tələblərə çevik uyğunlaşaraq rəqabət üstünlüyü yaratmaqdır."
                  )}
                </p>
              </div>
            </div>
            <div className="md:w-[644px]  mt-[56px] md:mt-0">
              <img src={about4} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
