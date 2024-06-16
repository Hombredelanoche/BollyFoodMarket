"use client";

import clsx from "clsx";

const Button = ({
  children = "cliquez ici",
  className = null,
  ...otherProps
}) => {
  return (
    <>
      <button
        className={clsx(
          "w-fit p-3 bg-[#043464] text-white rounded-lg font-semibold ",
          className
        )}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
