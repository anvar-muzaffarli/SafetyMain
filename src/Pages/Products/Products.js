import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaginatedItems from "./PaginatedItems";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { breadcrumb, filter } from "../../assets/images";
import { Helmet } from "react-helmet";
import OtherHero from "../../Components/Breadcrumb/OtherHero/OtherHero";

const Products = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [brandFilters, setBrandFilters] = useState({});
  const [colorFilters, setColorFilters] = useState({});
  const [categoryFilters, setCategoryFilters] = useState({});
  const [sizeFilters, setSizeFilters] = useState({});
  const [brandSearch, setBrandSearch] = useState("");
  const [colorSearch, setColorSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [sizeSearch, setSizeSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [allBrands, setBrands] = useState([]);
  const [allColors, setColors] = useState([]);
  const [allCategories, setCategories] = useState([]);
  const [allSizes, setSizes] = useState([]);
  const currentLanguage = i18n.language; 
  const [single, setSingle] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const brandParam = queryParams.get("brands");
    const colorParam = queryParams.get("colors");
    const categoryParam = queryParams.get("categories");
    const sizeParam = queryParams.get("sizes");

    if (brandParam) {
      const brandArray = brandParam.split(",");
      setBrandFilters((prev) => {
        const updatedFilters = {};
        brandArray.forEach((brand) => {
          updatedFilters[brand] = true;
        });
        return updatedFilters;
      });
    }
    if (colorParam) {
      const colorArray = colorParam.split(",");
      setColorFilters((prev) => {
        const updatedFilters = {};
        colorArray.forEach((color) => {
          updatedFilters[color] = true;
        });
        return updatedFilters;
      });
    }
    if (categoryParam) {
      const categoryArray = categoryParam.split(",");
      setCategoryFilters((prev) => {
        const updatedFilters = {};
        categoryArray.forEach((category) => {
          updatedFilters[category] = true;
        });
        return updatedFilters;
      });
    }
    if (sizeParam) {
      const sizeArray = sizeParam.split(",");
      setSizeFilters((prev) => {
        const updatedFilters = {};
        sizeArray.forEach((size) => {
          updatedFilters[size] = true;
        });
        return updatedFilters;
      });
    }
  }, [location.search]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/dashboard.php`,
        { withCredentials: false }
      );
      console.log(response.data.data);
      setProducts(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleBrandChange = (brand) => {
    setBrandFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [brand]: !prev[brand],
      };
      updateURLFilters(
        updatedFilters,
        colorFilters,
        sizeFilters,
        categoryFilters
      );
      return updatedFilters;
    });
  };

  const handleColorChange = (color) => {
    setColorFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [color]: !prev[color],
      };
      updateURLFilters(
        brandFilters,
        updatedFilters,
        sizeFilters,
        categoryFilters
      );
      return updatedFilters;
    });
  };


  const handleSizeChange = (size) => {
    setSizeFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [size]: !prev[size],
      };
      updateURLFilters(
        brandFilters,
        colorFilters,
        updatedFilters,
        categoryFilters
      );
      return updatedFilters;
    });
  };

  const updateURLFilters = (
    brandFilters,
    colorFilters,
    sizeFilters,
    categoryFilters
  ) => {
    const brandArray = Object.keys(brandFilters).filter(
      (key) => brandFilters[key]
    );
    const colorArray = Object.keys(colorFilters).filter(
      (key) => colorFilters[key]
    );
    const categoryArray = Object.keys(categoryFilters).filter(
      (key) => categoryFilters[key]
    );
    const sizeArray = Object.keys(sizeFilters).filter(
      (key) => sizeFilters[key]
    );

    const queryParams = new URLSearchParams();
    if (brandArray.length > 0) {
      queryParams.set("brands", brandArray.join(","));
    }
    if (colorArray.length > 0) {
      queryParams.set("colors", colorArray.join(","));
    }
    if (categoryArray.length > 0) {
      queryParams.set("categories", categoryArray.join(","));
    }
    if (sizeArray.length > 0) {
      queryParams.set("sizes", sizeArray.join(","));
    }

    navigation({ search: queryParams.toString() });
  };

  const filteredProducts = products.filter((product) => {
    const hasSelectedBrand = Object.keys(brandFilters).some(
      (key) => brandFilters[key]
    );
    const matchesBrand = !hasSelectedBrand || brandFilters[product.brand];

    const hasSelectedCategory = Object.keys(categoryFilters).some(
      (key) => categoryFilters[key]
    );
    const matchesCategory =
      !hasSelectedCategory || categoryFilters[product.category];

    const hasSelectedColor = Object.keys(colorFilters).some(
      (key) => colorFilters[key]
    );

    const matchesColor =
      !hasSelectedColor ||
      product.colors.some((colorObj) => colorFilters[colorObj.name]);

    const hasSelectedSize = Object.keys(sizeFilters).some(
      (key) => sizeFilters[key]
    );

    const matchesSizes =
      !hasSelectedSize ||
      product.sizes.some((sizeObj) => sizeFilters[sizeObj.name]);

    return matchesBrand && matchesColor && matchesCategory && matchesSizes;
  });

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    getColors();
  }, []);

  useEffect(() => {
    getSizes();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const getBrands = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/partners.php`,
        { withCredentials: false }
      );
      setBrands(response.data.data);
      console.log(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getColors = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/colors.php`,
        { withCredentials: false }
      );
      setColors(response.data.data);
      console.log(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getSizes = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/sizes.php`,
        { withCredentials: false }
      );
      setSizes(response.data.data);
      console.log(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `https://www.safetyguard.az/safetyguard/categories.php`,
        { withCredentials: false }
      );
      setCategories(response.data.data);
      console.log(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredBrand = allBrands?.filter((brand) =>
    brand?.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const filteredColor = allColors?.filter((color) =>
    color?.name.toLowerCase().includes(colorSearch.toLowerCase())
  );

  const filteredSize = allSizes?.filter((size) =>
    size?.name.toLowerCase().includes(sizeSearch.toLowerCase())
  );

  const clearBrandFilters = () => {
    setBrandFilters({});
    updateURLFilters({}, colorFilters, sizeFilters, categoryFilters);
  };

  const clearColorFilters = () => {
    setColorFilters({});
    updateURLFilters(brandFilters, {}, sizeFilters, categoryFilters);
  };

  const clearSizeFilters = () => {
    setSizeFilters({});
    updateURLFilters(brandFilters, colorFilters, {}, categoryFilters);
  };

  useEffect(() => {
    const getSeoTags = async () => {
      try {
        const response = await axios.get(
          "https://www.safetyguard.az/safetyguard/seoTagsProducts.php"
        );
        const data = response.data.data || [];

        setSingle(data[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getSeoTags();
  }, []);

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
          <OtherHero title="Məhsullar" />
        </div>
        <div className="max-w-containerSm md:max-w-container mx-auto pb-[88px] md:pb-[112px]">
          <div className="mt-[48px] md:mt-[56px]">
            <p className="text-[24px] font-bold font-firstFont text-firstColor mt-[48px] md:mt-[56px]">
              {t("Məhsullar")}
            </p>
          </div>

          <div className="md:flex max-w-containerSm md:max-w-container mx-auto mt-8 justify-between">
            <button
              className="md:hidden my-6 border-[1px] border-[#CFCFCF] w-full h-[44px] rounded-2xl px-5 text-[#2264DC] flex justify-between items-center font-secondFont"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{t("Filter")}</span>{" "}
              <img alt="Filter" className="h-6 w-6" src={filter}></img>
            </button>
            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4 overflow-auto shadow-lg ">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-lg font-bold"
                >
                  ✖
                </button>

                <div className="w-full mx-auto mt-8">
                  <div>
                    <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl">
                      <label className="text-[#393941] font-semibold">
                        {t("Brendlər")}
                      </label>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl mt-2">
                      <div className="relative w-full">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder={t("Axtarın")}
                          value={brandSearch}
                          onChange={(e) => setBrandSearch(e.target.value)}
                          className="w-full pl-10 pr-4 border rounded-lg h-[40px] border-[#E7E7E7] focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col mt-2 max-h-48 overflow-y-auto space-y-2">
                        {filteredBrand.map((brand) => (
                          <div key={brand.id}>
                            <input
                              type="checkbox"
                              id={brand.id}
                              checked={!!brandFilters[brand.name]}
                              onChange={() => handleBrandChange(brand.name)}
                              className="accent-[#162D59] h-6 w-6 relative top-[6px]"
                            />
                            <label
                              htmlFor={brand.id}
                              className="ml-2 text-firstColor font-secondFont text-[14px]"
                            >
                              {brand.name}
                            </label>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={clearBrandFilters}
                        className="mt-[10px] w-full py-3 border-t-[1px] border-[#CFCFCF] text-[#162D59]"
                      >
                        {t("Seçimləri ləğv et")}
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl">
                      <label className="text-[#393941] font-semibold">
                        {t("Rənglər")}
                      </label>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl mt-2">
                      <div className="relative w-full">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder={t("Axtarın")}
                          value={colorSearch}
                          onChange={(e) => setColorSearch(e.target.value)}
                          className="w-full pl-10 pr-4 border rounded-lg h-[40px] border-[#E7E7E7] focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col mt-2 max-h-48 overflow-y-auto space-y-2">
                        {filteredColor.map((color) => (
                          <div key={color.id}>
                            <input
                              type="checkbox"
                              id={color.id}
                              checked={!!colorFilters[color.name]}
                              onChange={() => handleColorChange(color.name)}
                              className="accent-[#162D59] h-6 w-6 relative top-[6px]"
                            />
                            <label
                              htmlFor={color.id}
                              className="ml-2 text-firstColor font-secondFont text-[14px]"
                            >
                              {color.name}
                            </label>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={clearColorFilters}
                        className="mt-[10px] w-full py-3 border-t-[1px] border-[#CFCFCF] text-[#162D59]"
                      >
                        {t("Seçimləri ləğv et")}
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl">
                      <label className="text-[#393941] font-semibold">
                        {t("Ölçülər")}
                      </label>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl mt-2">
                      <div className="relative w-full">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder={t("Axtarın")}
                          value={sizeSearch}
                          onChange={(e) => setSizeSearch(e.target.value)}
                          className="w-full pl-10 pr-4 border rounded-lg h-[40px] border-[#E7E7E7] focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col mt-2 max-h-48 overflow-y-auto space-y-2">
                        {filteredSize.map((size) => (
                          <div key={size.id}>
                            <input
                              type="checkbox"
                              id={size.id}
                              checked={!!sizeFilters[size.name]}
                              onChange={() => handleSizeChange(size.name)}
                              className="accent-[#162D59] h-6 w-6 relative top-[6px]"
                            />
                            <label
                              htmlFor={size.id}
                              className="ml-2 text-firstColor font-secondFont text-[14px]"
                            >
                              {size.name}
                            </label>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={clearSizeFilters}
                        className="mt-[10px] w-full py-3 border-t-[1px] border-[#CFCFCF] text-[#162D59]"
                      >
                        {t("Seçimləri ləğv et")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="md:w-[273px] hidden md:block">
              <div>
                <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl">
                  <label className="text-[#393941] font-semibold">
                    {t("Brendlər")}
                  </label>
                </div>

                <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl mt-2">
                  <div className="relative w-full">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder={t("Axtarın")}
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      className="w-full pl-10 pr-4 border rounded-lg h-[40px] border-[#E7E7E7] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2 max-h-48 overflow-y-auto space-y-2">
                    {filteredBrand.map((brand) => (
                      <div key={brand.id}>
                        <input
                          type="checkbox"
                          id={`brand-${brand.id}`}
                          checked={!!brandFilters[brand.name]}
                          onChange={() => handleBrandChange(brand.name)}
                          className="accent-[#162D59] h-6 w-6 relative top-[6px]"
                        />
                        <label
                          htmlFor={`brand-${brand.id}`}
                          className="ml-2 text-firstColor font-secondFont text-[14px]"
                        >
                          {brand.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={clearBrandFilters}
                    className="mt-[10px] w-full py-3 border-t-[1px] border-[#CFCFCF] text-[#162D59]"
                  >
                    {t("Seçimləri ləğv et")}
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl">
                  <label className="text-[#393941] font-semibold">
                    {t("Rənglər")}
                  </label>
                </div>

                <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl mt-2">
                  <div className="relative w-full">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder={t("Axtarın")}
                      value={colorSearch}
                      onChange={(e) => setColorSearch(e.target.value)}
                      className="w-full pl-10 pr-4 border rounded-lg h-[40px] border-[#E7E7E7] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2 max-h-48 overflow-y-auto space-y-2">
                    {filteredColor.map((color) => (
                      <div key={color.id}>
                        <input
                          type="checkbox"
                          id={`color-${color.id}`}
                          checked={!!colorFilters[color.name]}
                          onChange={() => handleColorChange(color.name)}
                          className="accent-[#162D59] h-6 w-6 relative top-[6px]"
                        />
                        <label
                          htmlFor={`color-${color.id}`}
                          className="ml-2 text-firstColor font-secondFont text-[14px]"
                        >
                          {getLocalizedField(color, "name")}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={clearColorFilters}
                    className="mt-[10px] w-full py-3 border-t-[1px] border-[#CFCFCF] text-[#162D59]"
                  >
                    {t("Seçimləri ləğv et")}
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl">
                  <label className="text-[#393941] font-semibold">
                    {t("Ölçülər")}
                  </label>
                </div>

                <div className="bg-[#F9FAFB] border border-[#CFCFCF] p-4 rounded-xl mt-2">
                  <div className="relative w-full">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder={t("Axtarın")}
                      value={sizeSearch}
                      onChange={(e) => setSizeSearch(e.target.value)}
                      className="w-full pl-10 pr-4 border rounded-lg h-[40px] border-[#E7E7E7] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2 max-h-48 overflow-y-auto space-y-2">
                    {filteredSize.map((size) => (
                      <div key={size.id}>
                        <input
                          type="checkbox"
                          id={`size-${size.id}`}
                          checked={!!sizeFilters[size.name]}
                          onChange={() => handleSizeChange(size.name)}
                          className="accent-[#162D59] h-6 w-6 relative top-[6px]"
                        />
                        <label
                          htmlFor={`size-${size.id}`}
                          className="ml-2 text-firstColor font-secondFont text-[14px]"
                        >
                          {size.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={clearSizeFilters}
                    className="mt-[10px] w-full py-3 border-t-[1px] border-[#CFCFCF] text-[#162D59]"
                  >
                    {t("Seçimləri ləğv et")}
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-[985px]">
              {isLoading ? (
                <p className="text-white">Loading...</p>
              ) : (
                <PaginatedItems itemsPerPage={12} items={filteredProducts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
