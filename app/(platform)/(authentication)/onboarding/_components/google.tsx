"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
export const SignInWithGoogle = () => {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/",
        })
      }
      className=" cursor-pointer w-[48%] font-bold text-[15px] leading-[20px] bg-[#a8b3cf33]"
      variant="default"
    >
      Google
    </Button>
  );
};
