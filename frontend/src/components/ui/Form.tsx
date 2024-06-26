"use client";

import clsx from "clsx";
import { Form as FormikForm } from "formik";

const Form = ({ className, ...otherProps }) => (
  <FormikForm
    className={clsx("flex flex-col gap-4 p-10", className)}
    noValidate
    {...otherProps}
  ></FormikForm>
);

export default Form;
