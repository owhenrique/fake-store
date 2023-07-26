import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

function ProductDetails() {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);

  const handleData = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${product_id}`
    );
    setProduct(data);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <Link to={"/"}>
        <div className="text-gray-500 flex justify-start gap-4">
          <IoIosArrowBack size={40} />
          <h1 className="flex justify-center items-center">Back</h1>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={product.image} />
        <h1>{product.title}</h1>
      </div>
    </>
  );
}

export default ProductDetails;
