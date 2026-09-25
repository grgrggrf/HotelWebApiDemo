import axiosGet from "../services/axiosGet.ts";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList.tsx";
import AddProduct from "./components/AddProduct.tsx";
import PutAndPatchProduct from "./components/PutAndPatchProduct.tsx";
import DeleteProduct from "./components/DeleteProduct.tsx";
interface Product {
  id: number;

  name: string;

  price: number;
  description: string;
}
function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [getData, setGetData] = useState(false);
  useEffect(() => {
    async function response() {
      try {
        const { data } = await axiosGet("https://localhost:7234/api/Products");
        setProduct(data);
      } catch (err: unknown) {
        console.log(err);
      }
    }
    response();
  }, []);

  function handleButton() {
    setGetData((getdata) => !getdata);
  }

  return (
    <div>
      <h1>产品页面</h1>
      {getData &&
        product.map((p) => (
          <ul key={p.id}>
            <ProductList product={p}></ProductList>
          </ul>
        ))}
      <button onClick={handleButton}>点击获取数据</button>
      <AddProduct></AddProduct>
      <PutAndPatchProduct></PutAndPatchProduct>
      <DeleteProduct></DeleteProduct>
    </div>
  );
}

export default App;
