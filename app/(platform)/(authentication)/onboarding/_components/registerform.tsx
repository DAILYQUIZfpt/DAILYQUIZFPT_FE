"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { RegisterSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import InputField from "@/components/inputField";

type Input = z.infer<typeof RegisterSchema>;
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Input>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      fullname: "",
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-1"
    >
      <InputField
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        register={register}
        error={errors.email}
      />
      <InputField
        name="fullname"
        label="Full name"
        placeholder="Full name"
        type="text"
        register={register}
        error={errors.fullname}
      />
      <InputField
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        register={register}
        error={errors.password}
        isValid={isValid}
        watch={watch}
      />
      <InputField
        name="username"
        label="Enter a username"
        placeholder="Enter a username"
        type="text"
        register={register}
        error={errors.username}
      />
      <span className="pb-4 typo-subhead text-[#cfd6e6] border-b border-[#a8b3cf33]">
        Your email will be used to send you product and community updates
      </span>
      <label className="relative  border-b border-[#a8b3cf33] inline-flex items-center text-[#a8b3cf] z-1 cursor-pointer select-none font-bold typo-footnote p-1 pr-3">
        <input type="checkbox" className="absolute w-0 h-0 opacity-0"></input>
        <div className="relative flex w-5 h-5 items-center justify-center rounded-md border-2 border-[#a8b3cf] mr-3 z-1"></div>
        I don’t want to receive updates and promotions via email
      </label>
      <div className="p-3">
        <button
          type="submit"
          aria-busy="false"
          className="px-5  w-full hover:bg-[#cfd6e6] rounded-[12px] h-10 py-5 flex items-center justify-center text-[#0e1217]  text-[15px] leading-[20px] font-bold bg-white  "
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
