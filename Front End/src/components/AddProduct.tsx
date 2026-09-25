import { useState } from "react";
import axiosPost from "../../services/axiosPost.ts";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  async function handleAdd() {
    const res = await axiosPost("https://localhost:7234/api/Products", {
      name,
      price,
    });
    console.log(res);
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="请输入要添加的商品名称"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="请输入商品对应的价格"
        className="price-input"
      />

      <button onClick={handleAdd}>新增</button>
    </>
  );
}

export default AddProduct;
