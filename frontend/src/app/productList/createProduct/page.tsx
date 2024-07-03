import withAuth from "@/components/hoc/withAuth";
import React, { useState } from "react";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState([]);
  return <div></div>;
};

export default withAuth(CreateProduct, "ROLE_ADMIN");
