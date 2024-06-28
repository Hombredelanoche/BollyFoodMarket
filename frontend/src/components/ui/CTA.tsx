"use client";

import Button from "@/components/ui/Button";
import React from "react";

interface CTAProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const CTA: React.FC<CTAProps> = ({ children, ...otherProps }) => {
  return (
    <>
      <section className="flex flex-col gap-5 p-3 items-center justify-center w-3/4 h border-t-2 border-b-2 border-[#A58B5A] mt-16 mx-auto">
        <article className="text-xl font-semibold underline italic">
          {children}
        </article>
        <Button>Pour en savoir plus !</Button>
      </section>
    </>
  );
};

export default CTA;
