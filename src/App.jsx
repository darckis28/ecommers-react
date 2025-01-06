import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <div className="p-3 md:p-8">
        <ModelsCategory />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
export default App;
