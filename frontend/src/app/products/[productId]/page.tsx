const ProductDetails = ( { params } : {
  params: { productId: string}
}) => {
  return <><h1>Product detail {params.productId} </h1></>
}

export default ProductDetails