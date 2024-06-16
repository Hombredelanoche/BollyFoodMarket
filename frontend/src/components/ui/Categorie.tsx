"use client";

import Button from "@/components/ui/Button";
import clsx from "clsx";
import Image from "next/image";

const Categorie = ({ children, src, ...otherProps }) => {
  return (
    <>
      <div
        className={clsx(
          "flex justify-between items-center content-center gap-5"
        )}
        {...otherProps}
      >
        <Image
          src={src}
          width={200}
          height={200}
          alt="catgerories"
          className="rounded-lg"
        />
        <div>{children}</div>
        <Button>voir</Button>
      </div>
    </>
  );
};

export default Categorie;
