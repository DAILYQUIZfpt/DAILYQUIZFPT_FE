"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { LogInSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { toogleForgot, toogleLogin } from "@/redux/slices/app";
import InputField from "@/components/inputField";
import ErrorMessage from "@/components/errorMessage";

type Input = z.infer<typeof LogInSchema>;
export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
    },
  });

  const hanldeForgotPassword = () => {
    dispatch(toogleLogin(false));
    dispatch(toogleForgot(true));
  };

  const handleNewAccount = () => {};

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-1"
    >
      {/* Email */}
      <InputField
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        register={register}
        error={errors.email}
      />
      {/* Password */}
      <InputField
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        register={register}
        error={errors.password}
      />
      {/* Button */}
      <div className="flex flex-row mt-4 w-full items-center mb-6">
        <div
          onClick={hanldeForgotPassword}
          className="flex cursor-pointer flex-1 flex-row text-[#a8b3cf] text-[15px] leading-[20px] underline"
        >
          Forgot password?
        </div>
        <button
          type="submit"
          aria-busy="false"
          className="px-5 max-w-[150px] w-full hover:bg-[#cfd6e6] rounded-[12px] h-10 py-5 flex items-center justify-center text-[#0e1217]  text-[15px] leading-[20px] font-bold bg-white  "
        >
          Log in
        </button>
      </div>
      <ErrorMessage
        message="The email or password you entered doesn't match our records.
          Please try again or"
        action="create new account"
        onClick={handleNewAccount}
      ></ErrorMessage>
    </form>
  );
};
