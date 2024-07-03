"use client";
import Button from "@/components/ui/Button";
import axios from "axios";
import { useState } from "react";

const AscFilter = () => {
  const [products, setProducts] = useState([]);
  const [isAsc, setIsAsc] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        isAsc
          ? "https://localhost:8000/api/produits/price-asc"
          : "https://localhost:8000/api/produits/price-desc"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits", error);
    }
  };

  const toggleSortOrder = () => {
    setIsAsc(!isAsc);
    fetchProducts();
  };

  return (
    <div>
      <Button onClick={toggleSortOrder}>
        {"Trier par prix"} {isAsc ? "decroissant" : "croissant"}
      </Button>
    </div>
  );
};

export default AscFilter;
