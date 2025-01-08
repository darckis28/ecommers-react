import { Link } from "react-router-dom";
import Starts from "../icons/Starts";
import { startDimension } from "../utils/startDimension";
const CardProduct = ({ info }) => {
  const { title, price, image, rating, id } = info;
  return (
    <Link
      to={`/details/${id}`}
      className="grid grid-cols-1 gap-4 p-4  rounded-lg shadow-lg"
    >
      <img
        className="h-60 object-contain w-full object-center"
        src={image}
        alt={title}
      />
      <h3 className="font-bold text-[20px]">{title}</h3>
      <div className="flex items-center gap-2">
        <span
          className="w-24 overflow-x-hidden"
          style={{ width: startDimension(rating.rate) }}
        >
          <Starts />
        </span>
        <p>
          <span>{rating?.rate}</span>/5
        </p>
      </div>
      <p className="font-bold text-2xl">${price}</p>
    </Link>
  );
};
export default CardProduct;
