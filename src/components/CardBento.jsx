const CardBento = ({ img, title, custom }) => {
  return (
    <div
      className={`overflow-hidden rounded-3xl relative h-48 w-full bg-white ${custom}`}
    >
      <img
        className="w-full h-full object-cover object-top"
        src={img}
        alt="image for the model casual"
      />
      <h3 className="absolute top-3 left-4 text-2xl font-semibold ">{title}</h3>
    </div>
  );
};
export default CardBento;
