"use client";

import Categorie from "@/components/ui/Categorie";
import CTA from "@/components/ui/CTA";
import Image from "next/image";

const Accueil = () => {
  return (
    <>
      <section className="flex justify-between items-center mx-auto p-14 rounded-sm w-3/4 gap-20">
        <article className="flex flex-col items-center shadow-lg">
          <div className="flex flex-col">
            <Image
              src="/food-1.jpg"
              width={800}
              height={800}
              alt="logo"
              className="rounded-sm"
            />
          </div>
        </article>
        <article className="flex flex-col justify-around items-start gap-20">
          <Categorie src="/food-2.jpg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eos inventore repudiandae voluptatem! Quibusdam perferendis ipsam
            qui quasi, rem velit distinctio odio asperiores ipsa totam ratione
            repellat laborum saepe est.
          </Categorie>
          <Categorie src="/food-2.jpg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eos inventore repudiandae voluptatem! Quibusdam perferendis ipsam
            qui quasi, rem velit distinctio odio asperiores ipsa totam ratione
            repellat laborum saepe est.
          </Categorie>
          <Categorie src="/food-2.jpg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eos inventore repudiandae voluptatem! Quibusdam perferendis ipsam
            qui quasi, rem velit distinctio odio asperiores ipsa totam ratione
            repellat laborum saepe est.
          </Categorie>
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
