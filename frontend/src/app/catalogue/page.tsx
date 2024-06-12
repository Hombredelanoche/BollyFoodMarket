"use client";
import Error from "next/error";
import { useEffect, useState } from "react";

const Catalogue = () => {
  const [produit, setProduit] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const query = await fetch(
          "https://127.0.0.1:8000/api/produits?page=1",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!query.ok) {
          throw new Error(`Http error ! Status: ${query.statut}`);
        }
        const response = await query.json();
        console.log(response);
        if (Array.isArray(response["hydra:member"])) {
          setProduit(response["hydra:member"]);
        } else {
          setError("Unexpected response struture");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);

  return <>catalogue</>;
};

export default Catalogue;
