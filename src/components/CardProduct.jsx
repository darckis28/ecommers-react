import Starts from "../icons/Starts";

const CardProduct = ({ info }) => {
  const { title, price, image, rating } = info;

  const calculateRate = () => {
    const porcent = (rating?.rate * 96) / 5;
    return `${porcent}px`;
  };
  // calculateRate();

  return (
    <div className="grid grid-cols-1 gap-4 p-4  rounded-lg shadow-lg">
      <img
        className="h-60 object-contain w-full object-center"
        src={image}
        alt={title}
      />
      <h3 className="font-bold text-[20px]">{title}</h3>
      <div className="flex items-center gap-2">
        <span
          className="w-24 overflow-x-hidden"
          style={{ width: calculateRate() }}
        >
          <Starts />
        </span>
        <p>
          <span>{rating?.rate}</span>/5
        </p>
      </div>
      <p className="font-bold text-2xl">${price}</p>
    </div>
  );
};
export default CardProduct;
