"use client";
import { Poppins } from "next/font/google";

import { Button } from "@ui/button";
import { cn } from "@lib/utils";
import { Logo } from "@/components/logo";

import { useDispatch } from "react-redux";
import {
  setProgressWidth,
  toogleLanding,
  toogleLogin,
} from "@/redux/slices/app";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const Header = () => {
  const dispatch = useDispatch();
  const handleClickLogin = (width: number) => {
    dispatch(setProgressWidth(width));
    dispatch(toogleLanding(false));
    dispatch(toogleLogin(true));
  };
  return (
    <header className="max-w-[1200px] px-6 mt-6 md:mt-20 w-full mx-auto flex items-center justify-between">
      <Logo></Logo>
      <div className="flex items-center gap-3">
        <span className="text-[#a8b3cf] text-base cursor-pointer hidden md:block">
          Already a daily.quiz member?
        </span>
        <Button
          onClick={() => handleClickLogin(50)}
          className="bg-inherit hover:cursor-pointer"
          size="sm"
          variant="outline"
          asChild
        >
          <div
            className={cn("text-white font-bold font-sans", textFont.className)}
          >
            Login
          </div>
        </Button>
      </div>
    </header>
  );
};
