"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductCard = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduits() {
      try {
        const response = await axios.get(
          "https://localhost:8000/api/produits?page=1"
        );
        setProducts(response.data["hydra:member"]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    }

    fetchProduits();
  }, []);

  return (
    <>
      {products.map((product) => (
        <a key={product.id} href={product.href} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image src="/food-2.jpg" alt="produit" width={280} height={320} />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            {product.nom_du_produit}
          </h3>
          <p className="mt-1 text-sm font-medium">{product.description}</p>
          <article className="flex justify-between w-full">
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.prix_ttc + " €"}
            </p>
            <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
          </article>
        </a>
      ))}
    </>
  );
};

export default ProductCard;
