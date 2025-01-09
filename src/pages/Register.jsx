import Eye from "../icons/Eye";
import Arroba from "../icons/Arroba";
import InputForm from "../components/InputForm";
import Userinput from "../icons/Userinput";
import Phone from "../icons/Phone";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 mx-auto   max-w-lg">
      <p className="text-center text-2xl font-bold text-black sm:text-3xl">
        register new account
      </p>
      <InputForm
        placeholder={"Enter username"}
        icon={<Userinput />}
        type={"text"}
      />
      <InputForm
        placeholder={"Enter firstname"}
        icon={<Userinput />}
        type={"text"}
      />
      <InputForm
        placeholder={"Enter lastname"}
        icon={<Userinput />}
        type={"text"}
      />
      <InputForm
        placeholder={"Enter number phone"}
        icon={<Phone />}
        type={"tel"}
      />
      <div className="flex gap-3 w-full flex-col md:flex-row">
        <InputForm
          clasname={"flex-1"}
          placeholder={"Enter address"}
          type={"text"}
        />
        <InputForm
          placeholder={"Enter number address"}
          type={"number"}
        />
      </div>
      <InputForm
        placeholder={"Enter email"}
        icon={<Arroba />}
        type={"email"}
      />
      <InputForm
        placeholder={"Enter password"}
        icon={<Eye />}
        type={"password"}
      />

      <button
        type="submit"
        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
      >
        Sign up
      </button>

      <p className="text-center text-sm text-gray-500">
        Do you have an account?{" "}
        <Link
          className="underline"
          to={"/login"}
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};
export default Register;
