"use client";
import InputField from "@/components/inputField";
import { Logo } from "@/components/logo";
import { NewPasswordSchema } from "@/lib/schema";
import { toogleForgot, toogleVerification } from "@/redux/slices/app";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

type Input = z.infer<typeof NewPasswordSchema>;
export const ChangePassword = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

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
          <h2 className="text-2xl font-bold text-center">
            Create a new password
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col py-8 px-14 "
          >
            <p className="typo-body text-center text-[#cfd6e6] mb-6">
              Please enter your new password. A password strength meter will
              guide you if your password is strong enough.
            </p>
            <InputField
              name="password"
              label="Create new password"
              placeholder="Create new password"
              register={register}
              type="password"
              error={errors.password}
              errorType="danger"
              isValid={isValid}
            />
            <button
              type="submit"
              aria-busy="false"
              className="px-5 mt-6  hover:bg-[#cfd6e6] rounded-[12px] h-10 py-5 flex items-center justify-center text-[#0e1217]  text-[15px] leading-[20px] font-bold bg-white  "
            >
              Change password
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
