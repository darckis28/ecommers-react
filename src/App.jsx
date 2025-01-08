import Footer from "./components/Footer";
import Header from "./components/Header";
import SingUpMessage from "./components/SingUpMessage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <SingUpMessage />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/details/:id"
          element={<Details />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
