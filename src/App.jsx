import Footer from "./components/Footer";
import Header from "./components/Header";
import SingUpMessage from "./components/SingUpMessage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GlobalContext from "./context/GlobalContext";

const App = () => {
  // const { token } = useContextCommers();
  return (
    <GlobalContext>
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
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </GlobalContext>
  );
};
export default App;
