"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduitId() {
      try {
        const response = await axios.get(
          `https://localhost:8000/api/produits/id`
        );
        setProduct(response.data["hydra:membre"]);
      } catch (error) {
        console.error("Aucune produit trouver");
      }
    }

    fetchProduitId();
  }, []);

  return (
    <>
      <h1>Détail produit</h1>
      <div>
        {product.map((elem) => (
          <>
            <h2 key={elem.id}>Détails du produit</h2>
            <p>Nom du produit : {elem.nom_du_produit}</p>
            <p>Description : {elem.description}</p>
            <p>{elem.prix_ttc + " €"}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
