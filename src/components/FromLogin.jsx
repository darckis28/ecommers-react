import InputForm from "./InputForm";
import Arroba from "../icons/Arroba";
import Eye from "../icons/Eye";
import { data, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContextCommers } from "../hooks/useContextCommers";
import { useState } from "react";
import Userinput from "../icons/Userinput";

const FromLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setToken } = useContextCommers();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      setToken(res.data.token);
      navigate("/");
      setError(null);
    } catch (e) {
      setError("the username or password is incorrect");
    }
  };

  const onSubmit = handleSubmit((data) => {
    login(data.username, data.password);
  });

  return (
    <form
      onSubmit={onSubmit}
      action="#"
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium font-integralCF">
        Sign in to your account
      </p>
      <InputForm
        name={"username"}
        placeholder={"Enter username"}
        icon={<Userinput />}
        type={"text"}
        register={{
          ...register("username", {
            required: {
              value: true,
              message: "This field is required",
            },
          }),
        }}
        errors={errors}
      />
      <InputForm
        name={"password"}
        placeholder={"Enter password"}
        icon={<Eye />}
        type={"password"}
        register={{
          ...register("password", {
            required: {
              value: true,
              message: "This field is required",
            },
          }),
        }}
        errors={errors}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
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
