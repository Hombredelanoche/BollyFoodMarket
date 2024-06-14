"use client";

import Image from "next/image";
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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src="/food-2.jpg"
                  alt="produit"
                  width={280}
                  height={320}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {product.nom_du_produit}
              </h3>
              <p className="mt-1 text-sm font-medium">{product.description}</p>

              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.prix_ttc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
