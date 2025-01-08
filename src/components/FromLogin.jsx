import InputForm from "./InputForm";
import Arroba from "../icons/Arroba";
import Eye from "../icons/Eye";
import { Link } from "react-router-dom";

const FromLogin = () => {
  return (
    <form
      action="#"
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium font-integralCF">
        Sign in to your account
      </p>
      <InputForm
        placeholder={"Enter email"}
        icon={<Arroba />}
        type={"email"}
      />
      <InputForm
        placeholder={"Enter email"}
        icon={<Eye />}
        type={"password"}
      />

      <button
        type="submit"
        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

      <p className="text-center text-sm text-gray-500">
        No account?{" "}
        <Link
          to={"/register"}
          className="underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};
export default FromLogin;
