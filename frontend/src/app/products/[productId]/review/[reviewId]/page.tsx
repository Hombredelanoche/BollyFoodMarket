const ReviewDetails = ( {params} : {
  params: {
    productId: string,
    reviewId: string
  }
}) => {
  return <> Ceci est la review : {params.reviewId} du produit :{params.productId} !</>
}

export default ReviewDetails