import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/data.types";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

function Home() {
  const [products, setProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    displayData();
  }, []);

  async function displayData() {
    const { data } = await axios.get("http://localhost:8000/api/v1/products");
    setProducts(data.data);
  }

  async function favoriteProduct(product_id: string, index: number) {
    const copyProduct = [...products];
    copyProduct[index].favorited = !copyProduct[index].favorited;
    setProducts(copyProduct);
    axios.patch(
      `http://localhost:8000/api/v1/products/favorites/${product_id}`
    );
  }

  return (
    <div className="flex flex-col justify-between gap-1 py-4 md:py-6 min-h-[100vh]">
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-rows gap-10 justify-center items-center mx-4 md:mx-10">
        {products.map((product, index) => (
          <div className="relative">
            <div className="absolute right-2 top-2">
              <button
                className="bg-gray-100 flex justify-center items-center rounded-full p-2"
                onClick={() => favoriteProduct(product._id, index)}
              >
                {product?.favorited === true ? (
                  <MdOutlineFavorite color="#FF0000" />
                ) : (
                  <MdOutlineFavoriteBorder color="#FF0000" />
                )}
              </button>
            </div>
            <Link to={`/${product._id}`} key={product._id}>
              <div className="flex flex-col justify-evenly items-center h-[150px] border-2 border-gray-100 rounded-md shadow-lg">
                <img src={product.image} className="h-[80px] object-contain" />
                <span className="before:content-[''] before:block before:bg-gray-300 before:w-full before:h-1"></span>
                <div className="flex flex-col justify-between items-center text-justify text-sm px-4">
                  <h1 className="font-bold">{product.title}</h1>
                  <p className="text-gray-500">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-slate-400 flex flex-row justify-center items-center h-[40px] mb-10">
        <Link
          to={`/favorites`}
          className="flex justify-center items-center gap-1"
        >
          <MdOutlineFavorite color="#FF0000" />
          <h1 className="text-black font-semibold text-lg">Favorites</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
