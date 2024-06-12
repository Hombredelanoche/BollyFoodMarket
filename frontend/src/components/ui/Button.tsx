"use client";

import clsx from "clsx";

const Button = ({
  className,
  children = "cliquez ici",
  otherProps,
  type = "button",
}) => {
  return (
    <>
      <button
        className={clsx(
          "w-fit p-3 bg-[#043464] text-white rounded-full font-semibold",
          className
        )}
        type={type}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
