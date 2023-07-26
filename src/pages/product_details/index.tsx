import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";

function ProductDetails() {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const [productSize, setProductSize] = useState(0);
  const [productColor, setProductColor] = useState(0);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${product_id}`
    );
    setProduct(data);
  };

  return (
    <div className="flex flex-col justify-between gap-1 py-2 md:py-6 mx-4 md:mx-10 min-h-[100vh]">
      <Link to={"/"}>
        <div className="bg-black text-white flex justify-center items-center rounded-full w-8 h-8">
          <IoIosArrowBack size={20} />
        </div>
      </Link>
      <img src={product.image} className="m-0 h-[40vh] object-contain" />
      <div className="text-justify flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-2xl">{product.title}</h1>
        <p className="text-gray-500 font-light text-sm after:context-[''] after:block after:bg-gray-200 after:h-[1px] after:w-full after:mt-3">
          {product.description}
        </p>
      </div>
      {(product.category == "men's clothing" ||
        product.category == "women's clothing") && (
        <div className="flex justify-between md:px-20">
          <div className="flex flex-col">
            <p className="text-sm">Size</p>
            <div className="flex justify-center items-center rounded-full mt-1 gap-3 text-sm">
              <button
                className={`${
                  productSize === 1
                    ? "bg-black border-black text-white"
                    : "border-gray-400  text-gray-800"
                } flex justify-center items-center rounded-full border-2 p-3 h-3 w-3`}
                onClick={() =>
                  productSize === 1 ? setProductSize(0) : setProductSize(1)
                }
              >
                S
              </button>
              <button
                className={`${
                  productSize === 2
                    ? "bg-black border-black text-white"
                    : "border-gray-400  text-gray-800"
                } flex justify-center items-center rounded-full border-2 p-3 h-3 w-3`}
                onClick={() =>
                  productSize === 2 ? setProductSize(0) : setProductSize(2)
                }
              >
                M
              </button>
              <button
                className={`${
                  productSize === 3
                    ? "bg-black border-black text-white"
                    : "border-gray-400  text-gray-800"
                } flex justify-center items-center rounded-full border-2  p-3 h-3 w-3`}
                onClick={() =>
                  productSize === 3 ? setProductSize(0) : setProductSize(3)
                }
              >
                L
              </button>
              <button
                className={`${
                  productSize === 4
                    ? "bg-black border-black text-white"
                    : "border-gray-400  text-gray-800"
                } flex justify-center items-center rounded-full border-2  p-3 h-3 w-3`}
                onClick={() =>
                  productSize === 4 ? setProductSize(0) : setProductSize(4)
                }
              >
                XL
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Color</p>
            <div className="flex justify-center items-center rounded-full mt-1 gap-3">
              <button
                className={`${
                  productColor === 1 ? "border-black" : "border-slate-200"
                } bg-slate-200 rounded-full border-2 h-3 w-3 p-3`}
                onClick={() =>
                  productColor === 1 ? setProductColor(0) : setProductColor(1)
                }
              ></button>
              <button
                className={`${
                  productColor === 2 ? "border-black" : "border-gray-400"
                } bg-gray-400 rounded-full border-2 h-3 w-3 p-3`}
                onClick={() =>
                  productColor === 2 ? setProductColor(0) : setProductColor(2)
                }
              ></button>
              <button
                className={`${
                  productColor === 3 ? "border-black" : "border-green-300"
                } bg-green-300 rounded-full border-2 h-3 w-3 p-3`}
                onClick={() =>
                  productColor === 3 ? setProductColor(0) : setProductColor(3)
                }
              ></button>
              <button
                className={`${
                  productColor === 4 ? "border-black" : "border-blue-300"
                } bg-blue-300 rounded-full border-2 h-3 w-3 p-3`}
                onClick={() =>
                  productColor === 4 ? setProductColor(0) : setProductColor(4)
                }
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between md:px-20 items-center mb-6">
        <h1 className="font-extrabold text-4xl">${product.price}</h1>
        <a href="https://github.com/owhenrique" target="_blank">
          <div className="bg-black flex justify-evenly items-center rounded-full min-h-[40px] min-w-[150px] md:h-[60px] text-white">
            <MdShoppingCart />
            <h1>Add to Cart</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;
