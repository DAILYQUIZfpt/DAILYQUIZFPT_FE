import React, { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Mail, Lock, Eye, EyeOff, ShieldEllipsis } from "lucide-react";

type InputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  type?: string;
  error?: FieldError;
  errorType?: "danger" | "default";
  isValid?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  register,
  type = "text",
  error,
  errorType = "default",
  isValid,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="flex flex-col items-stretch">
      <div
        className={cn(
          "flex border-l-[2px] border-transparent hover:bg-[#a8b3cf33]  cursor-text relative rounded-[14px] flex-row items-center pl-3 px-4 h-12 overflow-hidden bg-[#a8b3cf14]",
          isFocused && "border-white border-[1px]",
          error
            ? " inset-shadow-invalid"
            : "hover:border-l-white hover:border-l-[2px] border-l-[2px] ",
          isValid && " inset-shadow-valid "
        )}
      >
        {name === "email" ? (
          <Mail className="h-6 w-6 mr-2 text-[#a8b3cf] hover:text-white"></Mail>
        ) : name === "password" ? (
          <Lock className="h-6 w-6 mr-2 text-[#a8b3cf] hover:text-white"></Lock>
        ) : name === "code" ? (
          <ShieldEllipsis className="h-6 w-6 mr-2 text-[#a8b3cf] hover:text-white"></ShieldEllipsis>
        ) : (
          ""
        )}
        <div className="flex flex-col flex-1 items-start max-w-full">
          {isFocused && <div className="text-[#a8b3cf] text-xs">{label}</div>}
          <input
            {...register(name)}
            type={isPasswordVisible ? "text" : type}
            placeholder={isFocused ? "" : placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="self-stretch text-ellipsis text-[#a8b3cf] bg-transparent hover:text-white focus:outline-none"
          />
        </div>
        {type === "password" && (
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
            {isPasswordVisible ? (
              <EyeOff
                className={cn(
                  "h-5 w-5 mr-2 rotate-180 text-[#a8b3cf] hover:text-white",
                  isFocused && "text-white"
                )}
              ></EyeOff>
            ) : (
              <Eye
                className={cn(
                  "h-5 w-5 mr-2 rotate-180 text-[#a8b3cf] hover:text-white",
                  isFocused && "text-white"
                )}
              ></Eye>
            )}
          </div>
        )}
      </div>

      {isValid ? (
        <div className={cn("mt-1 px-2 h-4 typo-caption1 text-[#39e58c]  ")}>
          Strong as it gets
        </div>
      ) : (
        <div
          className={cn(
            "mt-1 px-2 h-4 typo-caption1  ",
            errorType === "danger" ? "text-[#e04337]" : "text-[#a8b3cfa3]"
          )}
        >
          {error?.message}
        </div>
      )}
    </div>
  );
};

export default InputField;
