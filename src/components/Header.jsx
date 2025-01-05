import Cart from "../icons/Cart";
import Down from "../icons/Down";
import HamburgerIcon from "../icons/Hamburger";
import Search from "../icons/Search";
import User from "../icons/User";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex gap-2 items-center">
        <span>
          <HamburgerIcon />
        </span>
        <h1 className="text-[25.2px] font-integralCF font-extrabold tracking-[-0.07em]">
          SHOP.PE
        </h1>
      </div>
      {/* <nav>
        <ul className="flex gap-4">
          <li>
            <a
              href="#"
              className="flex gap-1 items-center"
            >
              Shop <Down />
            </a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
      </nav> */}
      <div className="flex gap-2">
        <span>
          <Search />
        </span>
        <span>
          <User />
        </span>
        <span>
          <Cart />
        </span>
      </div>
    </header>
  );
};
export default Header;
