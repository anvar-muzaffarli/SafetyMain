import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MobileCategoryMenu = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language; 
  const [currentLevelItems, setCurrentLevelItems] = useState([]);
  const [categoryStack, setCategoryStack] = useState([]); 

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.safetyguard.az/safetyguard/categories.php",
        { withCredentials: false }
      );
      const tree = buildCategoryTree(response.data.data);
      setCurrentLevelItems(tree); 
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

  const handleCategoryClick = (cat) => {
    if (cat.subMenu.length > 0) {
      setCategoryStack((prev) => [...prev, currentLevelItems]); 
      setCurrentLevelItems(cat.subMenu);
    } else {
      window.location.href = cat.link;
    }
  };

  const handleBack = () => {
    if (categoryStack.length > 0) {
      const prev = [...categoryStack];
      const lastLevel = prev.pop();
      setCurrentLevelItems(lastLevel);
      setCategoryStack(prev);
    }
  };

  return (
    <div className="bg-white z-50 p-4 overflow-auto mt-10 min-h-screen">
      {categoryStack.length > 0 && (
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 font-semibold text-lg px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition"
          >
            <span className="text-xl mr-2">←</span> {t("Geri")}
          </button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {currentLevelItems.map((cat) => (
          <div
            key={cat.id}
            className="flex justify-between items-center px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
          >
            <div
              className="text-base font-medium text-gray-800 w-full"
              onClick={() => (window.location.href = cat.link)}
            >
              {cat.name}
            </div>

            {cat.subMenu.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick(cat);
                }}
                className="ml-3 text-gray-500 hover:text-gray-700 transition"
              >
                ➤
              </button>

              
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCategoryMenu;
