export interface Product {
  id?: number;
  nom_du_produit: string;
  description: string;
  prix_da?: number;
  marge?: number;
  prix_ht?: number;
  prix_tva: number;
  prix_ttc: number;
  stock?: number;
  actif?: true;
  poids: number;
  origine: string;
}
