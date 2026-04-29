"use client";

import { useEffect, useState } from "react";

const Toast = ({ toast }: { toast: { success: number; msg: string } }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toast.success > 0) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!show) return null;

  return (
    <div
      className={`${
        toast.success === 200
          ? "border-green-500 text-green-500"
          : toast.success === 400
          ? "border-red-500 text-red-500"
          : ""
      } transition-all duration-300 border fixed top-10 right-10 w-[90%] sm:w-[25%] bg-[#252c32] z-[99] flex items-center justify-center px-4 py-4 rounded-lg`}
    >
      <span className="font-geometric font-bold text-center text-sm sm:text-base">
        {toast.msg}
      </span>
    </div>
  );
};

export default Toast;
