import React, { useState, useEffect } from "react";
import { breadcrumb } from "../../assets/images";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";
import Accordion from "../Blogs/Accordion.js";
import BlogVideo from "./BlogVideo.js";

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [list, setItems] = useState([]);
  const [single, setSingle] = useState(null);

  useEffect(() => {
    getSeoTags();
    getBlogs();
  }, [currentLanguage]); // Dil dəyişəndə dataları yenidən yoxlamaq üçün

  const getSeoTags = async () => {
    try {
      const response = await axios.get(
        "https://www.safetyguard.az/safetyguard/seoTagsBlogs.php"
      );
      const data = response.data.data || [];
      setSingle(data[0]);
    } catch (error) {
      console.error("Error fetching SEO tags:", error);
    }
  };

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/blogs.php`,
        { withCredentials: false }
      );
      setItems(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

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

      <div className="bg-[#F9F9F9]">
        <div
          className="bg-black/60"
          style={{
            backgroundImage: `url(${breadcrumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "241px",
          }}
        >
          {/* Hero başlığı tərcüməyə uyğunlaşdırıldı */}
          <OtherHero title={t("Bloq")} />
        </div>

        <div className="max-w-containerSm md:max-w-container mx-auto pb-[88px] md:pb-[112px]">
          <div className="mt-[48px] md:mt-[56px] grid grid-cols-1 md:grid-cols-4 gap-5">
            {list?.map((slide) => (
              <div
                key={slide.id}
                className="rounded-xl py-5 px-4 border border-[#D7D7D7] text-[#292929]"
              >
                <img
                  alt="Blog"
                  className="rounded-lg h-[222px] object-cover w-full"
                  src={`https://www.safetyguard.az/safetyguard/${slide.image}`}
                />

                <p className="text-[18px] font-medium mt-6">
                  {getLocalizedField(slide, "title")}
                </p>
                <p className="mt-2">{getLocalizedField(slide, "date")}</p>
                <p className="mt-4">
                  {getLocalizedField(slide, "content")
                    .replace(/<[^>]*>/g, "")
                    .slice(0, 50)}
                  ...
                </p>
                <div className="mt-5">
                  <a href={`/${currentLanguage}/blogs/${slide.id}`}>
                    <button className="h-[44px] w-full">
                      {t("Daha ətraflı")}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Accordion Section - Tam Tərcümə Olunmuş Versiya */}
          <div className="mt-16">
            <Accordion title={t("faq_q1")}>
              <p>{t("faq_a1")}</p>
            </Accordion>

            <Accordion title={t("faq_q2")}>
              <p>{t("faq_a2")}</p>
            </Accordion>

            <Accordion title={t("faq_q3")}>
              <p>{t("faq_a3")}</p>
            </Accordion>

            <Accordion title={t("faq_q4")}>
              <p>{t("faq_a4")}</p>
            </Accordion>
          </div>
        </div>
        <BlogVideo />
      </div>
    </>
  );
};

export default Blogs;