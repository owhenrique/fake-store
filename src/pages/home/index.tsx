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
    <div className="grid grid-cols-2 grid-flow-rows gap-10 justify-center items-center m-6">
      {products?.map((products) => (
        <Link to={`/${products.id}`}>
          <div className="flex flex-col justify-evenly items-center outline outline-offset-2 outline-1 h-[250px] rounded-sm my-2">
            <img src={products.image} className="h-[80px] object-contain" />
            <div className="flex flex-col justify-evenly items-center gap-2 text-center text-sm mb-0 before:content-[''] before:block before:bg-black before:w-[150px] before:h-[1px] before:mt-1">
              <span>{products.title}</span>
              <span>${products.price}</span>
              <span>{products.id}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
