"use client";

import CategorieELements from "@/components/ui/CategorieELements";
import CTA from "@/components/ui/CTA";
import Image from "next/image";

const Accueil = () => {
  return (
    <>
      <section className="flex justify-between items-center p-14 gap-20">
        <article className="flex flex-col items-center">
          <div className="flex flex-col w-96">
            <Image
              src="/food-1.jpg"
              width={500}
              height={500}
              alt="logo"
              className="rounded-lg"
            />
          </div>
        </article>
        <article className="flex flex-col justify-around items-start gap-20">
          <CategorieELements />
        </article>
      </section>

      <CTA>
        Notre but est de vous apportez l{"'"}essentiels de la cuisine indienne
        afin que l{"'"}Inde soi chez vous !
      </CTA>
    </>
  );
};

export default Accueil;
