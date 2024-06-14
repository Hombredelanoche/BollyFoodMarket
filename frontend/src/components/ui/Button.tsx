"use client";

import clsx from "clsx";

const Button = ({ children = "cliquez ici", type = "button", ...props }) => {
  return (
    <>
      <button
        className={clsx(
          "w-fit p-3 bg-[#043464] text-white rounded-lg font-semibold "
        )}
        type="button"
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
