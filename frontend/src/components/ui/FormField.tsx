"use client";

import clsx from "clsx";
import { useField } from "formik";

const FormField = ({
  name = "",
  label = "",
  className = null,
  ...otherProps
}) => {
  const [field, { error, touched }] = useField(name);
  const hasError = Boolean(error && touched);

  return (
    <label className={clsx("flex flex-col gap-1", className)}>
      <span className="font-semibold text-sm">{label}</span>
      <input
        className="border-2 border-[#043464] p-2 w-80"
        {...field}
        {...otherProps}
      />
      {hasError && <span className="text-red-500 text-sm">{error}</span>}
    </label>
  );
};

export default FormField;
