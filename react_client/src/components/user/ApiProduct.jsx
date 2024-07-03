import products from "../../data/products";
const ProductGetAll = () => {

}

const ProductPagination = ({ preState, slot }) => {

}

const ProductGetOne = (productId) => {
  const product = products.find(product => product.id === parseInt(productId))
  return product;
}

export {
  ProductGetAll,
  ProductPagination,
  ProductGetOne
}
