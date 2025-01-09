import { useState } from "react";
import Close from "../icons/Close";
import { useContextCommers } from "../hooks/useContextCommers";

const SingUpMessage = () => {
  const [show, setShow] = useState(true);
  const { token } = useContextCommers();
  return (
    <div>
      {show && !token ? (
        <div className="bg-black flex justify-center items-center text-white text-xs sm:text-sm h-[38px] gap-2 relative">
          <p>Sign up and get 20% off to your first order.</p>
          <span className="underline">Sign Up Now </span>
          <button
            className="absolute right-2 cursor-pointer"
            onClick={() => setShow(false)}
          >
            <Close />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default SingUpMessage;
