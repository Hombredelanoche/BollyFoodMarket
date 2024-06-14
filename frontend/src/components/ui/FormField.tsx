import clsx from "clsx";

const FormField = ({ name, label, className = null, ...otherProps }) => {
  return (
    <label className={clsx("flex flex-col gap-2", className)}>
      <span className="font-semibold text-sm">{label}</span>
      <input className="border-2 border-[#043464] p-2 w-80" {...otherProps} />
    </label>
  );
};

export default FormField;
