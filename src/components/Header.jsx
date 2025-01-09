import { Link } from "react-router-dom";
import Cart from "../icons/Cart";
import HamburgerIcon from "../icons/Hamburger";
import Search from "../icons/Search";
import User from "../icons/User";
import Name from "./Name";
import { useState } from "react";
import { useContextCommers } from "../hooks/useContextCommers";

const Header = () => {
  const [show, setShow] = useState(false);
  const { token } = useContextCommers();

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex gap-2 items-center">
        {/* <span>
          <HamburgerIcon />
        </span> */}
        <Name />
      </div>
      <div className="flex gap-2">
        {/* <span>
          <Search />
        </span> */}
        <span
          onClick={() => setShow(!show)}
          className="block relative cursor-pointer"
        >
          <User />
          {show && (
            <div className="bg-[#f0f0f0] p-4 absolute bottom-0 right-2 translate-y-full  z-50">
              <ul className="text-black/60 ">
                {!token ? (
                  <>
                    <li>
                      <Link
                        className="hover:text-red-400"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-red-400"
                        to={"/register"}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <p
                      className="hover:text-red-400"
                      to={"/login"}
                    >
                      Logout
                    </p>
                  </li>
                )}
              </ul>
            </div>
          )}
        </span>
        <Link to={"/cart"}>
          <Cart />
        </Link>
      </div>
    </header>
  );
};
export default Header;
