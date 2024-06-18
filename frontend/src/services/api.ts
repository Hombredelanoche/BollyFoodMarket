import { Product } from "@/types/Product";
import axios from "axios";

const BASE_URL_GET_PRODUITS = "https://localhost:8000/api/produits?page=1";
const axiosInstance = axios.create({ baseURL: BASE_URL_GET_PRODUITS });

export const getProducts = async () => {
  return (await axiosInstance.get<Product[]>("products")).data.map(
    (product) => [
      product.id,
      product.nom_du_produit,
      product.description,
      product.prix_ttc,
      product.stock,
    ]
  );
};
