"use client";

import Button from "@/components/ui/Button";
import axios from "axios";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const CategorieELements = ({ ...otherProps }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "https://localhost:8000/api/categories?page=1"
        );
        setCategories(response.data["hydra:member"]);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération des informations"
        );
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      {categories?.map((categorie) => (
        <div
          key={categorie.id}
          className={clsx(
            "flex justify-between items-center content-center gap-5"
          )}
          {...otherProps}
        >
          <Image
            src={categorie.photoCategorie}
            width={200}
            height={200}
            alt="catgerories"
            className="rounded-sm"
          />
          <div className="flex flex-col gap-2">
            <h4>{categorie.denomination}</h4>
            <p>{categorie.detail}</p>
          </div>

          <Button>voir</Button>
        </div>
      ))}
    </>
  );
};

export default CategorieELements;
