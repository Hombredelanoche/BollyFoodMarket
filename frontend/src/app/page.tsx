"use client";

import Categorie from "@/components/ui/Categorie";
import CTA from "@/components/ui/CTA";
import Image from "next/image";

const Accueil = () => {
  return (
    <>
      <section className="flex justify-between items-center mx-auto p-20 rounded-xl">
        <article className="flex flex-col items-center rounded-xl shadow-2xl">
          <div className="flex flex-col">
            <Image
              src="/food-1.jpg"
              width={800}
              height={800}
              alt="logo"
              className="rounded-xl"
            />
          </div>
        </article>
        <article className="flex flex-col justify-around items-start gap-20 m-10">
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
