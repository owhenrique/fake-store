import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/data.types";

import { IoIosArrowBack } from "react-icons/io"

function Favorites() {
  const [products, setProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    displayData();
  }, []);

  async function displayData() {
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/products/favorites"
    );
    setProducts(data.data);
  }

  return (
    <div className="flex flex-col justify-between gap-1 py-2 md:py-6 mx-4 md:mx-10 min-h-[100vh]">
      <Link to={"/"}>
        <div className="bg-black text-white flex justify-center items-center rounded-full w-8 h-8">
          <IoIosArrowBack size={20} />
        </div>
      </Link>
    <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-rows gap-10 justify-center items-center m-6">
      {products.map((product) => (
        <Link to={`/${product._id}`} key={product._id}>
          <div className="flex flex-col justify-evenly items-center h-[250px] border-2 border-gray-100 rounded-md shadow-lg">
            <img src={product.image} className="h-[80px] object-contain" />
            <span className="before:content-[''] before:block before:bg-gray-300 before:w-full before:h-1"></span>
            <div className="flex flex-col justify-between items-center text-justify text-sm px-4">
              <h1 className="font-bold">{product.title}</h1>
              <p className="text-gray-500">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Favorites;
