import React, { FC, useState } from "react";
import { useForm, FieldValues, FieldPath } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";

interface InputFieldProps<TFieldValues extends FieldValues = FieldValues> {
  type: string;
  label: string;
  placeholder?: string;
  name: FieldPath<TFieldValues>;
}

const InputField: FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  name,
}) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const { register, handleSubmit, getFieldState, getValues } =
    useForm<FieldValues>({
      resolver: zodResolver(z.object({ [name as string]: z.string() })),
      defaultValues: {
        [name as string]: "",
      },
    });

  const handleInputFocus = () => {
    setIsInputFocus(true);
  };

  const handleInputBlur = () => {
    setIsInputFocus(false);
  };

  return (
    <div className={`flex flex-col items-stretch`}>
      <div
        className={`flex border-l-[2px] border-transparent hover:bg-[#a8b3cf33] cursor-text relative rounded-[14px] flex-row items-center pl-3 px-4 h-12 overflow-hidden bg-[#a8b3cf14]`}
      >
        {type === "email" && (
          <Mail className="h-6 w-6 mr-2 text-[#a8b3cf] hover:text-white"></Mail>
        )}

        <div className="flex flex-col flex-1 items-start max-w-full">
          {getFieldState(name as string).isDirty ||
            (isInputFocus && (
              <div className="text-[#a8b3cf] text-xs">{label}</div>
            ))}
          <input
            type={type}
            placeholder={
              getValues(name as string) || isInputFocus
                ? ""
                : placeholder || label
            }
            {...register(name as string)}
            required
            size={1}
            className={`self-stretch text-ellipsis text-[#a8b3cf] bg-transparent hover:text-white focus:outline-none ${
              isInputFocus || getFieldState(name as string).isDirty
                ? "text-white"
                : ""
            }`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default InputField;
