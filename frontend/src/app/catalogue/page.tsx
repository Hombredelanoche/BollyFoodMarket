"use client";

import React, { useEffect, useState } from "react";

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://localhost:8000/api/produits?page=1"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data["hydra:member"]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Un problème est survenu.</div>;
    console.log(error);
  }

  return (
    <>
      <h1>Catalogue</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <h2 className="font-bold text-xl">{product.nom_de_produit}</h2>
            <p>{product.description}</p>
            <p className="font-bold">{product.prix_ttc} €</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Catalogue;
