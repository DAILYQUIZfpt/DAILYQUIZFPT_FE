"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

import facebook from "@logo/brands/facebook.svg";
import google from "@logo/brands/google.svg";
import apple from "@logo/brands/apple.svg";
import { cn } from "@/lib/utils";

interface LoginProps {
  method: string;
  tailwind: string;
  variant: string;
}
export const LogInButton = ({ method, tailwind, variant }: LoginProps) => {
  const capitalizedMethod = method.charAt(0).toUpperCase() + method.slice(1);
  return (
    <Button
      onClick={() =>
        signIn(method, {
          callbackUrl: "/",
        })
      }
      className={cn(
        "cursor-pointer flex items-center gap-3  font-bold text-[15px] leading-[20px] hover:bg-[#cfd6e6]",
        tailwind
      )}
      variant={variant === "outline" ? "outline" : "default"}
    >
      <Image
        src={
          method === "facebook"
            ? facebook
            : method === "apple"
            ? apple
            : method === "google"
            ? google
            : ""
        }
        alt="method"
        height={24}
      ></Image>
      {capitalizedMethod}
    </Button>
  );
};
