import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ModelsCategory from "./components/ModelsCategory";
import SingUpMessage from "./components/SingUpMessage";

const App = () => {
  return (
    <>
      <SingUpMessage />
      <Header />
      <Hero />
      <Brands />
      <div className="p-8">
        <ModelsCategory />
      </div>
    </>
  );
};
export default App;
