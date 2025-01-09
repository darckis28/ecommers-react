import Eye from "../icons/Eye";
import Arroba from "../icons/Arroba";
import InputForm from "../components/InputForm";
import Userinput from "../icons/Userinput";
import Phone from "../icons/Phone";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const info = {
      email: data.email,
      username: data.username,
      password: data.password,
      name: {
        fristname: data.fristname,
        lastname: data.lastname,
      },
      address: {
        city: data.city,
        number: data.number,
      },
      phone: data.phone,
    };
    const res = await axios.post("https://fakestoreapi.com/users", info);
    console.log(res);
  });
  return (
    <form
      onSubmit={onSubmit}
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 mx-auto   max-w-lg"
    >
      <p className="text-center text-2xl font-bold text-black sm:text-3xl">
        register new account
      </p>
      <InputForm
        placeholder={"Enter username"}
        icon={<Userinput />}
        type={"text"}
        register={{
          ...register("username", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 3,
              message: "min 3 characters",
            },
            maxLength: {
              value: 10,
              message: "max 10 characters",
            },
          }),
        }}
        error={errors.username}
      />
      <InputForm
        placeholder={"Enter firstname"}
        icon={<Userinput />}
        type={"text"}
        register={{
          ...register("fristname", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 3,
              message: "min 3 characters",
            },
            maxLength: {
              value: 10,
              message: "max 10 characters",
            },
          }),
        }}
        error={errors.fristname}
      />
      <InputForm
        placeholder={"Enter lastname"}
        icon={<Userinput />}
        type={"text"}
        register={{
          ...register("lastname", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 3,
              message: "min 3 characters",
            },
            maxLength: {
              value: 10,
              message: "max 10 characters",
            },
          }),
        }}
        error={errors.lastname}
      />
      <InputForm
        placeholder={"Enter number phone"}
        icon={<Phone />}
        type={"tel"}
        register={{
          ...register("phone", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 9,
              message: "min 9 characters",
            },
            pattern: {
              value: /^\d{9}$/,
              message: "It has to be a phone number",
            },
          }),
        }}
        error={errors.phone}
      />
      <div className="flex gap-3 w-full flex-col md:flex-row">
        <InputForm
          clasname={"flex-1"}
          placeholder={"Enter city"}
          type={"text"}
          register={{
            ...register("city", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 7,
                message: "min 3 characters",
              },
              maxLength: {
                value: 20,
                message: "max 10 characters",
              },
            }),
          }}
          error={errors.city}
        />
        <InputForm
          placeholder={"Enter number address"}
          type={"number"}
          register={{
            ...register("number", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 4,
                message: "max 4 characters",
              },
              pattern: {
                value: /^[0-9,$]*$/,
                message: "only numbers are allowed",
              },
            }),
          }}
          error={errors.number}
        />
      </div>
      <InputForm
        placeholder={"Enter email"}
        icon={<Arroba />}
        type={"email"}
        register={{
          ...register("email", {
            required: {
              value: true,
              message: "This field is required",
            },

            pattern: {
              value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              message: "It has to be an email",
            },
          }),
        }}
        error={errors.email}
      />
      <InputForm
        placeholder={"Enter password"}
        icon={<Eye />}
        type={"password"}
        register={{
          ...register("password", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 8,
              message: "min 8 characters",
            },

            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/,
              message:
                "must contain at least one uppercase, one lowercase or special character",
            },
          }),
        }}
        error={errors.password}
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
