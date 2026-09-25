function ProductList({ product }) {
  return (
    <li>
      {product.id}
      {product.name}
      {product.price}
    </li>
  );
}
export default ProductList;
