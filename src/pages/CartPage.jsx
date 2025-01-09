import { useEffect } from "react";
import ButonBlack from "../components/ButtonBlack";
import ListProduct from "../components/ListProduct";
import Right from "../icons/Right";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="p-4">
      <h2 className="text-3xl font-extrabold font-integralCF mb-8 uppercase	">
        Your Cart
      </h2>
      <div className="flex flex-col md:flex-row  gap-10">
        <ul className="flex-1">
          <ListProduct />
          <ListProduct />

          <ListProduct />
        </ul>
        <div className="flex-1 flex justify-between flex-col p-4">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Order Summary</h3>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-black/60">Sub Total</span>{" "}
              <span className="font-bold ">$566</span>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-black/60">Delivery</span>{" "}
              <span className="font-bold ">$3</span>
            </div>
          </div>
          <div className="flex justify-between mt-5 text-sm mb-4">
            <span className="text-black">Total</span>{" "}
            <span className="font-bold ">$569</span>
          </div>
          <ButonBlack>
            Go to Checkout <Right />{" "}
          </ButonBlack>
        </div>
      </div>
    </section>
  );
};
export default CartPage;
