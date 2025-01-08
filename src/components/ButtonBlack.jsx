const ButonBlack = ({ children }) => {
  return (
    <button className="bg-black w-full rounded-3xl py-3 text-white text-normal lg:w-[210px] flex items-center justify-center gap-2">
      {children}
    </button>
  );
};
export default ButonBlack;
