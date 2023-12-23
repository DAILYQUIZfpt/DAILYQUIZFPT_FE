"use client";
import InputField from "@/components/inputField";
import { Logo } from "@/components/logo";
import { VerificationSchema } from "@/lib/schema";
import {
  toogleChangePassword,
  toogleForgot,
  toogleVerification,
} from "@/redux/slices/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { useCountdown } from "usehooks-ts";
import { cn } from "@/lib/utils";

type Input = z.infer<typeof VerificationSchema>;
export const Verification = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(VerificationSchema),
    defaultValues: {
      code: "",
    },
  });

  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 60,
  });

  const isCountingDown = count < 60 && count > 0;

  const handleResendCode = () => {
    if (!isCountingDown) {
      console.log("couting");
      startCountdown();
    }
  };

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    dispatch(toogleVerification(false));
    dispatch(toogleChangePassword(true));
  };
  return (
    <main className="w-full">
      <div className="px-10 py-8 w-full flex justify-start">
        <Logo size="sm"></Logo>
      </div>
      <div className="flex mx-auto flex-wrap justify-center w-full px-6 max-w-[1200px] flex-grow">
        <div className="flex overflow-y-auto z-1 flex-col max-w-[480px] w-full h-full text-white">
          <h2 className="text-2xl font-bold text-center">Verification</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col py-8 px-14 "
          >
            <p className="typo-body text-center text-[#cfd6e6] mb-6">
              We just sent the verification code to ducnltde170123@fpt.edu.vn
            </p>
            <InputField
              name="code"
              label="Code"
              placeholder="Code"
              register={register}
              error={errors.code}
              errorType="danger"
            />
            <button
              type="submit"
              aria-busy="false"
              className="px-5 mt-6  hover:bg-[#cfd6e6] rounded-[12px] h-10 py-5 flex items-center justify-center text-[#0e1217]  text-[15px] leading-[20px] font-bold bg-white  "
            >
              Verify
            </button>
          </form>
          <button
            onClick={handleResendCode}
            disabled={isCountingDown}
            className={cn(
              "mt-6 px-5 h-10 rounded-[12px] hover:bg-[#a8b3cf33] mx-auto typo-callout font-bold cursor-pointer flex justify-center items-center  bg-transparent border-[1px]",
              count !== 0 ? "cursor-not-allowed" : "cursor-pointer"
            )}
          >
            {count !== 0 ? `${count}s` : "Resend"}
          </button>
        </div>
      </div>
    </main>
  );
};
