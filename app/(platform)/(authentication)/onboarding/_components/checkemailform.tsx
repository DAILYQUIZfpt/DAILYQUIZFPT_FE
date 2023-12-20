"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { CheckEmailSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, Mail, MoveRight } from "lucide-react";

import { z } from "zod";

type Input = z.infer<typeof CheckEmailSchema>;

export const CheckEmailForm = () => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getFieldState,
    getValues,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(CheckEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleInputFocus = () => {
    setIsInputFocus(true);
  };

  const handleInputBlur = () => {
    setIsInputFocus(false);
  };

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data.email);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 mb-8"
    >
      <div className="flex flex-col items-stretch">
        <div
          className={cn(
            "flex",
            "border-l-[2px] border-transparent  hover:bg-[#a8b3cf33] cursor-text relative rounded-[14px] flex-row items-center pl-3 px-4 h-12 overflow-hidden bg-[#a8b3cf14]",
            isInputFocus && "border-white border-2",
            errors.email
              ? "border-l-[#e04337] border-l-[3px]"
              : "hover:border-l-white hover:border-l-[2px] border-l-[2px]"
          )}
        >
          <Mail className="h-6 w-6 mr-2 text-[#a8b3cf] hover:text-white"></Mail>
          <div className="flex flex-col flex-1 items-start max-w-full">
            {getFieldState("email").isDirty ||
              (isInputFocus && (
                <div className="text-[#a8b3cf] text-xs">Email</div>
              ))}
            <input
              placeholder={getValues("email") || isInputFocus ? "" : "Email"}
              {...register("email")}
              required
              size={1}
              className={cn(
                "self-stretch text-ellipsis text-[#a8b3cf] bg-transparent hover:text-white focus:outline-none",
                isInputFocus || (getFieldState("email").isDirty && "text-white")
              )}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></input>
          </div>
        </div>
      </div>
      {/* Error Message */}
      <div className="flex p-3 border border-[#a8b3cf33] border-l-4 border-l-[#e04337] flex-row items-center rounded-[16px]">
        <AlertTriangle className="h-6 w-6 mr-2 text-[#e04337]" />
        <div className="flex-1 flex text-[15px] leading-[20px] gap-1 ">
          Email is taken. Existing user?
          <button type="button" className="font-bold underline ">
            Log in.
          </button>
        </div>
      </div>
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
