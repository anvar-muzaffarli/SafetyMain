import React, { useEffect, useState } from "react";
import { breadcrumb, service1 } from "../../assets/images";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";

const Services = () => {
  const servicesItems = [
    {
      title: "Fərdi Mühafizə Vasitələrinin Təchizatı",
      description:
        "İşçilərin təhlükəsizliyini təmin etmək üçün Avropa standartlarına uyğun dəbilqə, qoruyucu eynək, qulaqcıq, əlcək, təhlükəsizlik ayaqqabısı və digər fərdi mühafizə vasitələrinin satışı.",
    },
    {
      title: "İşçi Geyimlərinin İstehsalı və Satışı",
      description:
        "Müxtəlif sənaye sahələri üçün mövsümə uyğun, rahat və davamlı iş geyimlərinin dizaynı, istehsalı və satışı. Geyimlər brendinizə uyğun olaraq fərdi dizaynda hazırlanır.",
    },
    {
      title: "Sifarişlə İstehsal Xidməti",
      description:
        "Müəssisələrin tələblərinə uyğun olaraq fərdi ölçü və texniki göstəricilərlə geyim və qoruyucu vasitələrin istehsalı. Operativ və keyfiyyətli xidmətə zəmanət verilir.",
    },
    {
      title: "Anbar və Logistika Xidməti",
      description:
        "Geniş anbar imkanlarımız və logistik infrastrukturumuz sayəsində sifarişlərin vaxtında və təhlükəsiz çatdırılması təmin olunur.",
    },
    {
      title: "Təhlükəsizlik Məsləhət Xidməti",
      description:
        "Müştərilərimizə fəaliyyət sahələrinə uyğun ən uyğun təhlükəsizlik həllərinin seçilməsi və tətbiqi üzrə peşəkar konsultasiya xidməti.",
    },
    {
      title: "Sektor Üzrə Təchizat Tərəfdaşlığı",
      description:
        "Neft, qaz, energetika, inşaat, kimya və digər sənaye sahələrində fəaliyyət göstərən müəssisələrlə uzunmüddətli əməkdaşlıq və sabit təchizat təminatı.",
    },
  ];

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const { id } = useParams();
  const [single, setSingle] = useState(null);

  useEffect(() => {
    const getSeoTags = async () => {
      try {
        const response = await axios.get(
          "https://www.safetyguard.az/safetyguard/seoTagsServices.php"
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
      <div className="bg-[#F9F9F9] pb-[128px] md:pb-[280px] text-[#121212] ">
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
          <OtherHero title="Xidmətlər" />
        </div>
        <div className="max-w-containerSm md:max-w-container mx-auto">
          <div className="mt-[48px] md:mt-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[24px] md:mt-[48px]">
              {servicesItems.map((service, index) => (
                <div key={index} className="w-full md:w-[413px]">
                  <div className="card-hover-animate bg-white h-[191px]">
                    <div className="mx-auto text-center px-4 pb-5 pt-8 md:pt-10 relative z-10">
                      <p className="text-lg font-medium">{t(service.title)}</p>
                      <p className="mt-4">{t(service.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full h-[417px] mt-[88px]">
          <img
            src={service1}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-[-100px] left-0 w-full flex justify-start pl-[calc((100vw-1280px)/2)]">
            <div className="md:w-[637px] w-[90%] mx-auto md:mx-0 bg-white py-6 md:py-12 px-9 rounded-lg shadow-lg text-center">
              <h1 className="text-[24px] md:text-[32px] font-medium">
                {t("Təhlükəsiz Gələcək Üçün Etibarlı Seçim")}
              </h1>
              <p className="mt-3 md:mt-5">
                {t(
                  "İş mühitinizdə maksimum təhlükəsizlik və rahatlıq təmin edən fərdi mühafizə vasitələri və işçi geyimləri ilə xidmətinizdəyik. «Safety Guard» MMC – keyfiyyət, sürət və peşəkar yanaşmanın ünvanı."
                )}
              </p>
              <a href="/contact">
                <button className="rounded bg-[#FAC211] w-[160px] h-[44px] mt-6 md:mt-10 text-[#121212]">
                  {t("Əlaqə")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
