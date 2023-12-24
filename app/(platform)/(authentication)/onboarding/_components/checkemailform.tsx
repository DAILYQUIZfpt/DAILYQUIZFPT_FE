"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { CheckEmailSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";

import { z } from "zod";
import InputField from "@/components/inputField";
import { useDispatch } from "react-redux";
import { toogleLanding, toogleLogin, toogleRegister } from "@/redux/slices/app";
import ErrorMessage from "@/components/errorMessage";

type Input = z.infer<typeof CheckEmailSchema>;

export const CheckEmailForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(CheckEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    dispatch(toogleLanding(false));
    dispatch(toogleRegister(true));
  };

  const handleLogin = () => {
    dispatch(toogleLanding(false));
    dispatch(toogleLogin(true));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 mb-8"
    >
      <InputField
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        register={register}
        error={errors.email}
      />
      {/* <ErrorMessage
        message=" Email is taken. Existing user?"
        action="Log in"
        onClick={handleLogin}
      ></ErrorMessage> */}
      <button
        type="submit"
        aria-busy="false"
        className="w-full hover:bg-[#cfd6e6] rounded-[12px] h-10 py-5 flex items-center justify-center text-[#0e1217]  text-[15px] leading-[20px] font-bold bg-white  "
      >
        Sign up - it&apos;s free
        <MoveRight className="w-5 h-6 ml-2 font-bold"></MoveRight>
      </button>
    </form>
  );
};
