const Quanty = ({ qty, children }) => {
  return (
    <div className=" pl-2">
      <span className="font-bold text-2xl">{qty}+</span>
      <p className="text-xs text-black/60">{children}</p>
    </div>
  );
};
export default Quanty;
