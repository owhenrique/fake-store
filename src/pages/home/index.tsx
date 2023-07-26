import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    displayData();
  }, []);

  async function displayData() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setProducts(data);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-rows gap-10 justify-center items-center m-6">
      {products?.map((products) => (
        <Link to={`/${products.id}`}>
          <div className="flex flex-col justify-evenly items-center h-[250px] border-2 border-gray-100 rounded-md shadow-lg">
            <img src={products.image} className="h-[80px] object-contain"/>
            <span className="before:content-[''] before:block before:bg-gray-300 before:w-full before:h-1"></span>
            <div className="flex flex-col justify-between items-center text-justify text-sm px-4">
              <h1 className="font-bold">{products.title}</h1>
              <p className="text-gray-500">${products.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
