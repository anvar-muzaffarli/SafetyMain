import React, { useEffect, useState } from "react";
import { categoryIcon1, categoryIcon2 } from "../../../assets/images";
import axios from "axios";
import { useTranslation } from "react-i18next";

const RecursiveMenu = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase];
  };

  return (
    <div className="absolute bg-white border border-gray-200 shadow-md min-w-[220px] z-50">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative group flex justify-between items-center px-3 py-2 hover:bg-gray-100 text-sm text-black cursor-pointer whitespace-nowrap"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="flex-1"
            onClick={() => (window.location.href = item.link)}
          >
            {getLocalizedField(item, "name")}
          </div>

          {item.subMenu.length > 0 && (
            <img
              src={categoryIcon2}
              alt=">"
              className="w-[14px] h-[14px] ml-2"
            />
          )}

          {hoveredIndex === index && item.subMenu.length > 0 && (
            <div className="absolute top-0 left-full">
              <RecursiveMenu items={item.subMenu} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Categories = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getLocalizedField = (item, fieldBase) => {
    if (currentLanguage === "en")
      return item[`${fieldBase}En`] || item[fieldBase];
    if (currentLanguage === "ru")
      return item[`${fieldBase}Ru`] || item[fieldBase];
    return item[fieldBase];
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCategories();
  }, [i18n.language]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.safetyguard.az/safetyguard/categories.php",
        { withCredentials: false }
      );
      const tree = buildCategoryTree(response.data.data);
      setItems(tree);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const buildCategoryTree = (categories) => {
    const categoryMap = {};
    const tree = [];

    categories.forEach((cat) => {
      categoryMap[cat.id] = {
        ...cat,
        link: `/${currentLanguage}/products?categories=${cat.name}`,
        subMenu: [],
      };
    });

    categories.forEach((cat) => {
      if (cat.parent_id && cat.parent_id != 0) {
        categoryMap[cat.parent_id]?.subMenu.push(categoryMap[cat.id]);
      } else {
        tree.push(categoryMap[cat.id]);
      }
    });

    return tree;
  };

  return (
    <div className="relative border-r border-[#E7E7E7] h-[1860px] pt-10 w-[280px] text-[#121212]">
      {items.map((cat, index) => (
        <div
          key={cat.id}
          className="relative flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="flex items-center flex-1"
            onClick={() => (window.location.href = cat.link)}
          >
            <img
              src={categoryIcon1}
              alt=""
              className="h-[30px] w-[30px] mr-3"
            />
            <p>{getLocalizedField(cat, "name")}</p>
          </div>

          {cat.subMenu.length > 0 && (
            <img src={categoryIcon2} className="w-[14px] h-[14px]" alt=">" />
          )}

          {hoveredIndex === index && cat.subMenu.length > 0 && (
            <div className="absolute top-0 left-full">
              <RecursiveMenu items={cat.subMenu} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
