import { useEffect, useState } from "react";
import Title from "../components/Title";
import Less from "../icons/Less";
import Plus from "../icons/Plus";
import Starts from "../icons/Starts";
import { startDimension } from "../utils/startDimension";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    }
    getProduct();
  }, [id]);
  return (
    <section className="flex gap-2 mb-5 flex-col md:flex-row">
      <div className="flex-1 flex">
        <img
          className="max-h-[450px] aspect-square object-contain mx-auto rounded-xl"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-between px-4">
        <div>
          <Title>{product?.title}</Title>
          <div className="flex items-center gap-2">
            <span
              className="w-24 overflow-x-hidden"
              style={{ width: startDimension(product?.rating?.rate) }}
            >
              <Starts />
            </span>
            <p>
              <span>{product?.rating?.rate}</span>/
              <span className="text-black/50">5</span>
            </p>
          </div>
          <span className="text-2xl font-bold">$ {product?.price}</span>
          <p className="text-black/60">{product?.description}</p>
        </div>
        <div className="flex gap-4 pr-5">
          <div className="flex items-center justify-between px-4 gap-2 bg-[#F0F0F0] w-[170px] h-[52px] rounded-3xl">
            <button onClick={() => count > 1 && setCount(count - 1)}>
              <Less />
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>
              <Plus />
            </button>
          </div>
          <button className="bg-black text-white flex-1 rounded-3xl">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default Details;
