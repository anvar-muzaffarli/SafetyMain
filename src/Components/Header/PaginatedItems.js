import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

function PaginatedItems({ itemsPerPage, items }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const getLocalizedValue = (base, baseEn, baseRu) => {
    if (currentLanguage === "en") return baseEn;
    if (currentLanguage === "ru") return baseRu;
    return base;
  };

  return (
    <>
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">
        {currentItems.map((item, index) => {
          return (
            <a href={`/${currentLanguage}/product-detail/${item.id}`}>
              <div className="bg-white rounded-[8px] h-full w-full md:w-[229px] min-h-[330px] mx-auto p-5 border border-[#EBEBEB] group relative">
                {item.isNew == 1 && (
                  <div className="absolute top-3 left-3 bg-[#FAC211] text-[#121212] text-[12px] font-medium px-2 py-1 rounded z-10">
                    {t("Yeni")}
                  </div>
                )}
                <div className="text-[#0B0B0B]">
                  <div className="bg-white h-[224px] flex justify-center items-center relative overflow-hidden">
                    <img
                      className="w-full h-full transition-all duration-300 group-hover:scale-110 object-cover"
                      src={`https://www.safetyguard.az/safetyguard/${item.image1}`}
                      alt={item.name || "Product image"}
                    />
                  </div>
                  <p className="font-medium mt-5 text-[#121212]">
                    {getLocalizedValue(item.name, item.nameEn, item.nameRu)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.colors?.map((colorItem, index) => (
                      <div
                        key={index}
                        className="w-7 h-7 flex items-center justify-center rounded-full border border-[#838383] bg-white"
                        title={colorItem.name}
                      >
                        <div
                          className="w-5 h-5 rounded-full"
                          style={{ backgroundColor: colorItem.code }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <ReactPaginate
        nextLabel={t("sonrakı")}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={t("əvvəlki")}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center space-x-1 my-4"
        pageClassName="inline-block px-2 py-1 text-sm md:text-base rounded bg-gray-200 hover:bg-gray-300"
        previousClassName="inline-block px-2 py-1 text-sm md:text-base rounded bg-gray-200 hover:bg-gray-300"
        nextClassName="inline-block px-2 py-1 text-sm md:text-base rounded bg-gray-200 hover:bg-gray-300"
        activeClassName="bg-blue-600 text-white"
        disabledClassName="text-gray-400 cursor-not-allowed"
      />
    </>
  );
}

export default PaginatedItems;
