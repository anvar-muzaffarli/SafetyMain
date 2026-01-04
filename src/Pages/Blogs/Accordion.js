import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-[23px] font-medium"
      >
        {title}
        <span>{open ? "-" : "+"}</span>
      </button>

      <div
        className={`mt-2 text-[#333] text-[20px]  overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
