import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ModelsCategory from "../components/ModelsCategory";
import SectionProducts from "../components/SectionProducts";
const Home = () => {
  return (
    <>
      {" "}
      <Hero />
      <Brands />
      <div className="p-3 md:p-8">
        <ModelsCategory />
        <SectionProducts
          category={2}
          title={"Clothes for Her"}
        />

        <SectionProducts
          category={3}
          title={"Clothes for His"}
        />
        <Contact />
      </div>
    </>
  );
};
export default Home;
