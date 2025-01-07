import { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";
import CardProduct from "./CardProduct";

const CATEGORY = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const SectionProducts = ({ category, title }) => {
  const [clothes, setClothes] = useState(null);
  useEffect(() => {
    async function getClothes() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${CATEGORY[category]}`
      );
      setClothes(response.data);
    }
    getClothes();
  }, [category]);
  return (
    <section className="mb-12">
      <Title>{title}</Title>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {clothes &&
          clothes.map((cloth) => (
            <CardProduct
              key={cloth.id}
              info={cloth}
            />
          ))}
      </ul>
    </section>
  );
};
export default SectionProducts;
