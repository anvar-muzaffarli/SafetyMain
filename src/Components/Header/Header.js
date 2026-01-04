// import React, { useEffect, useState } from "react";
// import { categoryIcon3, hamburger, kataloq, logo } from "../../assets/images";
// import axios from "axios";
// import PaginatedItems from "./PaginatedItems";
// import PaginatedItemsMobile from "./PaginatedItemsMobile";
// import { useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../../LanguageSwitcher";
// import OtherCategories from "../home/OtherCategories/OtherCategories";
// import MobileCategoryMenu from "./MobileCategoryMenu";

// const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const currentLanguage = i18n.language; 

//   const toggleSearch = () => {
//     setSearchQuery("");
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.safetyguard.az/safetyguard/dashboard.php`,
//         { withCredentials: false }
//       );
//       setProducts(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const location = useLocation(); // Get current route
//   const isHomePage = location.pathname === `/${currentLanguage}`;

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };
//   const isActiveLink = (path) => location.pathname === path;

//   const filteredProducts = searchQuery
//     ? products.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
//   const toggleHamburgerMenu = () => {
//     setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
//     setSearchQuery("");
//   };

//   const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
//   const toggleCategoryMenu = () => {
//     setIsCategoryMenuOpen(!isCategoryMenuOpen);
//     setSearchQuery("");
//   };

//   return (
//     <>
//       <div className="max-w-containerSm md:max-w-container mx-auto flex h-[93px] justify-between items-center relative font-secondFont">
//         <div className="flex items-center md:hidden">
//           <a href={`/${currentLanguage}`}>
//             {" "}
//             <img alt="Logo" className="w-[177px] h-[46px]" src={logo}></img>
//           </a>
//         </div>

//         <div className="flex gap-3">
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={toggleCategoryMenu}
//           >
//             <img alt="Catalog" className="w-10 h-10" src={kataloq}></img>
//           </button>
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={toggleHamburgerMenu}
//           >
//             <img alt="Burger" className="w-10 h-10" src={hamburger}></img>
//           </button>
//         </div>
//         <div className="md:flex items-center w-[990px]  hidden relative">
//           <nav>
//             <ul className="flex items-center justify-between text-[#121212]">
//               <div className="relative group w-fit ">
//                 <div className="bg-[#FAC211] h-[44px] w-[170px] py-[10px] px-4 flex gap-2 items-center rounded mr-[36px] cursor-pointer">
//                   <img className="h-6 w-6" src={categoryIcon3} alt="icon" />
//                   <p>{t("Kateqoriyalar")}</p>
//                 </div>

//                 {!isHomePage && (
//                   <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow rounded w-[170px] z-20">
//                     <OtherCategories />
//                   </div>
//                 )}
//               </div>
//               <div className="flex items-center text-[#121212] w-[510px]">
//                 <a
//                   className={`mr-[36px] py-[28px] ${
//                     isActiveLink("/about")
//                       ? "text-[#FAC211] "
//                       : "text-[#0B0B0B]"
//                   }`}
//                   href={`/${currentLanguage}/about`}
//                 >
//                   <li>{t("Haqqımızda")}</li>
//                 </a>
//                 <a
//                   className={`mr-[48px] py-[28px] ${
//                     isActiveLink("/partners")
//                       ? "text-[#FAC211] "
//                       : "text-[#0B0B0B]"
//                   }`}
//                   href={`/${currentLanguage}/partners`}
//                 >
//                   <li>{t("Partnyorlar")}</li>
//                 </a>
//                 <a
//                   className={`mr-[48px] py-[28px] ${
//                     isActiveLink("/services")
//                       ? "text-[#FAC211] "
//                       : "text-[#0B0B0B]"
//                   }`}
//                   href={`/${currentLanguage}/services`}
//                 >
//                   <li>{t("Xidmətlər")}</li>
//                 </a>

//                 <a
//                   className={`mr-[48px] py-[28px] ${
//                     isActiveLink("/blogs")
//                       ? "text-[#FAC211] "
//                       : "text-[#0B0B0B]"
//                   }`}
//                   href={`/${currentLanguage}/blogs`}
//                 >
//                   <li>{t("Bloq")}</li>
//                 </a>


//                  <a
//                   className={`mr-[36px] py-[28px] ${
//                     isActiveLink("/about")
//                       ? "text-[#FAC211] "
//                       : "text-[#0B0B0B]"
//                   }`}
//                   href={`/${currentLanguage}/qapi`}
//                 >
//                   <li>{t("Qapi")}</li>
//                 </a>
//                 <a
//                   className={`py-[28px] ${
//                     isActiveLink("/contact")
//                       ? "text-[#FAC211] "
//                       : "text-[#0B0B0B]"
//                   }`}
//                   href={`/${currentLanguage}/contact`}
//                 >
//                   <li>{t("Əlaqə")}</li>
//                 </a>
//               </div>
//             </ul>
//           </nav>
//         </div>

//         <div className="w-full justify-end hidden md:flex">
//           <div className="relative">
//             <button className="absolute top-3 left-4 text-white">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z"
//                   fill="black"
//                 />
//               </svg>
//             </button>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder={t("Axtar...")}
//               className="rounded-[8px] w-[300px] md:w-[315px] h-[44px] outline-none focus:ring-0 focus:outline-none border-[#C3C3C3] border-2 px-12 text-firstColor"
//             />
//             <button
//               onClick={toggleSearch}
//               className="absolute top-[11px] right-4 text-white"
//             ></button>
//           </div>
//         </div>
//       </div>

//       {searchQuery && (
//         <div className="absolute top-0 left-0 w-full bg-white z-20 mt-[170px] hidden md:block">
//           {isLoading ? (
//             <p className="text-black text-center">Loading...</p>
//           ) : (
//             <PaginatedItems itemsPerPage={12} items={filteredProducts} />
//           )}
//         </div>
//       )}
//       {searchQuery && (
//         <div className="absolute top-0 left-0 w-full bg-white mt-[140px] md:hidden z-50">
//           {isLoading ? (
//             <p className="text-black text-center">Loading...</p>
//           ) : (
//             <PaginatedItemsMobile itemsPerPage={12} items={filteredProducts} />
//           )}
//         </div>
//       )}

//       {isHamburgerMenuOpen && (
//         <div
//           className={`fixed inset-y-0 bg-[white] left-0 transform ${
//             isHamburgerMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-300 ease-in-out w-full z-40 shadow-lg`}
//         >
//           <div className="flex flex-col items-start max-w-containerSm mx-auto mt-4 w-full">
//             <div className="flex justify-between w-full">
//               <a className="block" href={`/${currentLanguage}`}>
//                 {" "}
//                 <img src={logo} alt="Logo" className="w-[177px] h-[46px]" />
//               </a>

//               <button onClick={toggleHamburgerMenu}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="black"
//                   width="24"
//                   height="24"
//                 >
//                   <path
//                     d="M6 6L18 18M18 6L6 18"
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="items-center justify-center h-screen w-full mt-4">
//               <div className="gap-4 max-w-containerSm flex flex-col font-secondFont">
//                 <div className="relative mt-3">
//                   <button className="absolute top-3 left-4 text-white">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z"
//                         fill="black"
//                       />
//                     </svg>
//                   </button>
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     placeholder={t("Axtar...")}
//                     className="rounded-[50px] w-full md:w-[755px] outline-none focus:ring-0 h-[44px] focus:outline-none border-[#C3C3C3] border-2 px-12 text-firstColork"
//                   />
//                 </div>
//                 <a
//                   className={`text-base text-left mt-5 font-normal ${
//                     isActiveLink("/") ? "text-[#FAC211] " : "text-[black]"
//                   }`}
//                   href={`/${currentLanguage}`}
//                 >
//                   {" "}
//                   {t("Ana səhifə")}
//                 </a>
//                 <a
//                   href={`/${currentLanguage}/about`}
//                   className={`text-base text-left font-normal ${
//                     isActiveLink("/about") ? "text-[#FAC211]" : "text-[black]"
//                   }`}
//                 >
//                   {t("Haqqımızda")}
//                 </a>
//                 <a
//                   href={`/${currentLanguage}/products`}
//                   className={`text-base text-left font-normal ${
//                     isActiveLink("/products")
//                       ? "text-[#FAC211]"
//                       : "text-[black]"
//                   }`}
//                 >
//                   {t("Məhsullar")}
//                 </a>
//                 <a
//                   href={`/${currentLanguage}/partners`}
//                   className={`text-base text-left font-normal ${
//                     isActiveLink("/partners")
//                       ? "text-[#FAC211]"
//                       : "text-[black]"
//                   }`}
//                 >
//                   {t("Partnyorlar")}
//                 </a>
//                 <a
//                   href={`/${currentLanguage}/services`}
//                   className={`text-base text-left font-normal ${
//                     isActiveLink("/services")
//                       ? "text-[#FAC211]"
//                       : "text-[black]"
//                   }`}
//                 >
//                   {t("Xidmətlər")}
//                 </a>
//                 <a
//                   href={`/${currentLanguage}/blogs`}
//                   className={`text-base text-left font-normal ${
//                     isActiveLink("/blogs") ? "text-[#FAC211]" : "text-[black]"
//                   }`}
//                 >
//                   {t("Bloq")}
//                 </a>
//                 <a
//                   href={`/${currentLanguage}/contact`}
//                   className={`text-base text-left font-normal ${
//                     isActiveLink("/contact") ? "text-[#FAC211]" : "text-[black]"
//                   }`}
//                 >
//                   {t("Əlaqə")}
//                 </a>
//                 <div className="mt-5">
//                   <LanguageSwitcher />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {isCategoryMenuOpen && (
//         <div
//           className={`fixed inset-y-0 bg-[white] left-0 transform ${
//             isCategoryMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-300 ease-in-out w-full z-40 shadow-lg`}
//         >
//           <div className="flex flex-col items-start max-w-containerSm mx-auto mt-4 w-full">
//             <div className="flex justify-between w-full">
//               <a className="block" href={`/${currentLanguage}`}>
//                 {" "}
//                 <img src={logo} alt="Logo" className="w-[177px] h-[46px]" />
//               </a>

//               <button onClick={toggleCategoryMenu}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="black"
//                   width="24"
//                   height="24"
//                 >
//                   <path
//                     d="M6 6L18 18M18 6L6 18"
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <MobileCategoryMenu />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;




import React, { useEffect, useState } from "react";
import {
  categoryIcon3,
  hamburger,
  kataloq,
  logo,
} from "../../assets/images";
import axios from "axios";
import PaginatedItems from "./PaginatedItems";
import PaginatedItemsMobile from "./PaginatedItemsMobile";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../LanguageSwitcher";
import OtherCategories from "../home/OtherCategories/OtherCategories";
import MobileCategoryMenu from "./MobileCategoryMenu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === `/${currentLanguage}`;
  const isActiveLink = (path) =>
    location.pathname === `/${currentLanguage}${path}`;

  useEffect(() => {
    axios
      .get("https://www.safetyguard.az/safetyguard/dashboard.php")
      .then((res) => {
        setProducts(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = searchQuery
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="max-w-containerSm md:max-w-container mx-auto h-[93px] flex items-center justify-between font-secondFont relative">

        {/* LOGO (mobile) */}
        <a href={`/${currentLanguage}`} className="md:hidden">
          <img src={logo} alt="Logo" className="w-[177px] h-[46px]" />
        </a>

        {/* MOBILE BUTTONS */}
        <div className="flex gap-3 md:hidden">
          <button onClick={() => setIsCategoryMenuOpen(true)}>
            <img src={kataloq} alt="Catalog" className="w-10 h-10" />
          </button>
          <button onClick={() => setIsHamburgerMenuOpen(true)}>
            <img src={hamburger} alt="Menu" className="w-10 h-10" />
          </button>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex w-full justify-between items-center">

          <ul className="flex items-center text-[#121212]">

            {/* KATEQORİYALAR */}
            <li className="relative group mr-[36px]">
              <div className="bg-[#FAC211] h-[44px] w-[170px] px-4 flex items-center gap-2 rounded cursor-pointer">
                <img src={categoryIcon3} alt="icon" className="w-6 h-6" />
                <span className="font-bold whitespace-nowrap">
                  {t("Kateqoriyalar")}
                </span>
              </div>

              {!isHomePage && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow rounded w-[170px] z-20">
                  <OtherCategories />
                </div>
              )}
            </li>

            {/* MENYU LINKLƏRİ */}
            {[
              { path: "/about", label: "Haqqımızda" },
              { path: "/partners", label: "Partnyorlar" },
              { path: "/services", label: "Xidmətlər" },
              { path: "/blogs", label: "Bloq" },
              { path: "/qapilar", label: "Jalüz qapılar" },
              { path: "/contact", label: "Əlaqə" },
            ].map((item) => (
              <li key={item.path} className="mr-[36px]">
                <a
                  href={`/${currentLanguage}${item.path}`}
                  className={`py-[28px] font-bold whitespace-nowrap hover:text-[#FFC024] ${
                    isActiveLink(item.path)
                      ? "text-[#FFC024]"
                      : "text-[#0B0B0B]"
                  }`}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Axtar...")}
              className="w-[315px] h-[44px] rounded border-2 px-12 outline-none"
            />
          </div>
        </nav>
      </header>

      {/* ================= SEARCH RESULT ================= */}
      {searchQuery && (
        <div className="absolute top-[93px] w-full bg-white z-20 hidden md:block">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <PaginatedItems items={filteredProducts} itemsPerPage={12} />
          )}
        </div>
      )}

      {/* ================= MOBILE MENU ================= */}
      {isHamburgerMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsHamburgerMenuOpen(false)}
          >
            ✕
          </button>

          <div className="flex flex-col gap-4 mt-12 font-secondFont">
            {[
              { path: "", label: "Ana səhifə" },
              { path: "/about", label: "Haqqımızda" },
              { path: "/partners", label: "Partnyorlar" },
              { path: "/services", label: "Xidmətlər" },
              { path: "/blogs", label: "Bloq" },
              { path: "/qapi", label: "Qapı" },
              { path: "/contact", label: "Əlaqə" },
            ].map((item) => (
              <a
                key={item.path}
                href={`/${currentLanguage}${item.path}`}
                className="font-bold"
              >
                {t(item.label)}
              </a>
            ))}

            <LanguageSwitcher />
          </div>
        </div>
      )}

      {/* ================= MOBILE CATEGORY ================= */}
      {isCategoryMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsCategoryMenuOpen(false)}
          >
            ✕
          </button>
          <MobileCategoryMenu />
        </div>
      )}
    </>
  );
};

export default Header;






