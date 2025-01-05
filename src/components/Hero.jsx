import model from "../assets/models.webp";
import Start from "../icons/Start";
import StartMin from "../icons/StartMin";
import ButtonBlack from "./ButtonBlack";
import Quanty from "./Quanty";
const Hero = () => {
  return (
    <section className="bg-[#F2F0F1] flex flex-col gap-1 lg:h-[663px] lg:flex-row">
      <div className="flex-1 p-3 lg:p-10 flex flex-col gap-4 justify-center">
        <h2 className="font-integralCF font-extrabold text-4xl leading-8 sm:text-4xl lg:text-[64px] lg:leading-none lg:font-normal tracking-tighter pt-10">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className="text-black/60 text-sm my-2">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <ButtonBlack>Shop Now</ButtonBlack>
        <div className="flex justify-center mt-10 gap-2 divide-x-2 lg:gap-8">
          <Quanty qty={200}>International Brands</Quanty>
          <Quanty qty={"2,000"}>High-Quality Products</Quanty>
          <Quanty qty={"30,000"}>Happy Customers</Quanty>
        </div>
      </div>
      <div className="relative flex-1">
        <span className="absolute top-24 left-8 text-5xl text-red-600">
          <StartMin />
        </span>
        <span className="absolute top-10 right-1 text-5xl">
          <Start />
        </span>
        <img
          className="w-full h-full object-cover object-top"
          src={model}
          alt="image of a model"
        />
      </div>
    </section>
  );
};
export default Hero;
