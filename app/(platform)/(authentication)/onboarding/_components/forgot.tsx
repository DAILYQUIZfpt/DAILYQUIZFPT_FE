"use client";
import InputField from "@/components/inputField";
import { Logo } from "@/components/logo";
import { ForgotPasswordSchema } from "@/lib/schema";
import {
  toogleForgot,
  toogleLogin,
  toogleVerification,
} from "@/redux/slices/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

type Input = z.infer<typeof ForgotPasswordSchema>;
export const ForgotPassword = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleBack = () => {
    dispatch(toogleForgot(false));
    dispatch(toogleLogin(true));
  };

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    dispatch(toogleForgot(false));
    dispatch(toogleVerification(true));
  };
  return (
    <main className="w-full">
      <div className="px-10 py-8 w-full flex justify-start">
        <Logo size="sm"></Logo>
      </div>
      <div className="flex mx-auto flex-wrap justify-center w-full px-6 max-w-[1200px] flex-grow">
        <div className="flex overflow-y-auto z-1 flex-col max-w-[480px] w-full h-full text-white">
          <h2 className="text-2xl font-bold text-center">Reset Password</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col py-8 px-14 "
          >
            <p className="typo-body text-center text-[#cfd6e6] mb-6">
              Enter the email address you registered with and we will send you a
              verification code.
            </p>
            <InputField
              name="email"
              label="Email"
              placeholder="Email"
              register={register}
              error={errors.email}
            />
            <button
              type="submit"
              aria-busy="false"
              className="px-5 mt-6 w-full hover:bg-[#cfd6e6] rounded-[12px] h-10 py-5 flex items-center justify-center text-[#0e1217]  text-[15px] leading-[20px] font-bold bg-white  "
            >
              Send verification code
            </button>
          </form>
          <footer className="flex  items-center w-full h-16 border-t gap-1 border-[#a8b3cf33] justify-center">
            <ArrowLeft className="w-4"></ArrowLeft>
            <button
              onClick={handleBack}
              className="typo-callout text white underline"
            >
              Back to login
            </button>
          </footer>
        </div>
      </div>
    </main>
  );
};
