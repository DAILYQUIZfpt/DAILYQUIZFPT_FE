import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { LogInSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

type Input = z.infer<typeof LogInSchema>;
export const LoginForm = () => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getFieldState,
    getValues,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(LogInSchema),
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
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-1"
    >
      {/* Email */}
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
        <div className="mt-2 px-2 h-4"></div>
      </div>
      {/* Password */}
      <div className="flex flex-col items-stretch">
        <div
          className={cn(
            "flex",
            "border-l-[2px] border-transparent  hover:bg-[#a8b3cf33] cursor-text relative rounded-[14px] flex-row items-center pl-3 px-4 h-12 overflow-hidden bg-[#a8b3cf14]",
            isInputFocus && "border-white border-2",
            errors.password
              ? "border-l-[#e04337] border-l-[3px]"
              : "hover:border-l-white hover:border-l-[2px] border-l-[2px]"
          )}
        >
          <Lock className="h-6 w-6 mr-2 text-[#a8b3cf] hover:text-white"></Lock>
          <div className="flex flex-col flex-1 items-start max-w-full mr-2">
            {getFieldState("password").isDirty ||
              (isInputFocus && (
                <div className="text-[#a8b3cf] text-xs">Password</div>
              ))}
            <input
              placeholder={
                getValues("password") || isInputFocus ? "" : "Password"
              }
              type={isShowPassword ? "text" : "password"}
              {...register("password")}
              required
              size={1}
              className={cn(
                "self-stretch text-ellipsis text-[#a8b3cf] bg-transparent hover:text-white focus:outline-none",
                isInputFocus ||
                  (getFieldState("password").isDirty && "text-white")
              )}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></input>
          </div>
          <div
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="cursor-pointer"
          >
            {isShowPassword ? (
              <EyeOff className="h-5 w-5 mr-2 rotate-180 text-[#a8b3cf] hover:text-white"></EyeOff>
            ) : (
              <Eye className="h-5 w-5 mr-2 text-[#a8b3cf] hover:text-white"></Eye>
            )}
          </div>
        </div>
        <div className="mt-2 px-2 h-4"></div>
      </div>
      {/* Button */}
      <div className="flex flex-row mt-4 w-full items-center">
        <div className="flex cursor-pointer flex-1 flex-row text-[#a8b3cf] text-[15px] leading-[20px] underline">
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
    </form>
  );
};
