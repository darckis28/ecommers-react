import versace from "../assets/Versace.svg";
import gucci from "../assets/gucci.svg";
import prada from "../assets/prada.svg";
import zara from "../assets/zara.svg";
import calvin from "../assets/calvin.svg";
const Brands = () => {
  return (
    <section className="bg-black py-6 px-2 flex justify-center items-center flex-wrap gap-6">
      <img
        src={versace}
        alt="image of the versace"
      />
      <img
        src={zara}
        alt="image of the versace"
      />
      <img
        src={gucci}
        alt="image of the versace"
      />
      <img
        src={prada}
        alt="image of the versace"
      />
      <img
        src={calvin}
        alt="image of the versace"
      />
    </section>
  );
};

export default Brands;
