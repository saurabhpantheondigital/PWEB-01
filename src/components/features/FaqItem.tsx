"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FaqItem = ({ ques, ans }: { ques: string; ans: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full mx-auto border-b-[0.5] border-[#C3C3C3] duration-300 ${
        open ? "py-2 pt-2 sm:pt-3 sm:pb-3" : "pt-2 pb-2 sm:pt-3 sm:pb-3 py-auto"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-white text-sm md:text-xl font-semibold font-avenir-demi">
          {ques}
        </h3>
        {open ? (
          <Minus className="text-white w-5 h-5 md:font-extrabold" />
        ) : (
          <Plus className="text-white w-5 h-5 md:font-extrabold" />
        )}
      </div>

      {/* Animated answer */}
      <p
        className={`text-white mt-2 relative font-avenir-medium text-xs md:text-base overflow-hidden transition-all duration-700 ease-initial ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {ans}
      </p>
    </div>
  );
};

export default FaqItem;
