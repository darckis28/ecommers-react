import modelOne from "../assets/model-1.png";
import modelTwo from "../assets/model-2.png";
import modelThree from "../assets/model-3.png";
import modelFour from "../assets/model-4.png";
import CardBento from "./CardBento";
import Title from "./Title";
const ModelsCategory = () => {
  return (
    <section className="bg-[#F0F0F0] p-4 container mx-auto rounded-2xl md:px-8">
      <Title>BROWSE BY dress STYLE</Title>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        <CardBento
          img={modelOne}
          title={"Casual"}
        />
        <CardBento
          img={modelThree}
          title={"Formal"}
          custom={"lg:col-span-2"}
        />{" "}
        <CardBento
          img={modelFour}
          title={"Party"}
          custom={"lg:col-span-2"}
        />
        <CardBento
          img={modelTwo}
          title={"Sport"}
        />
      </div>
    </section>
  );
};
export default ModelsCategory;
