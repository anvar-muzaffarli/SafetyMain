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

  return (
    <>
      <div className="max-w-containerSm md:max-w-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
        {currentItems &&
          currentItems.map((item, index) => (
            <a href={`/${currentLanguage}/product-detail/${item.id}`}>
              <div
                className="rounded-[20px] md:w-[271px] md:min-h-[280px] pt-[1px] mx-auto md:mx-0 flex flex-col justify-between"
                key={index}
              >
                <p className="text-left text-[14px] md:text-[18px] font-medium  text-black">
                  {item.name}
                </p>
              </div>
            </a>
          ))}
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
