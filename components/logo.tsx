import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import LogoLight from "@/public/logo_light.svg";

import { cn } from "@lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Arrow, TooltipArrow } from "@radix-ui/react-tooltip";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LogoProps {
  size: "sm" | "lg";
}

export const Logo = ({ size }: LogoProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href="/">
          <div
            className={cn(
              "hover:opacity-75 transition  gap-x-2 hidden md:flex",
              size === "lg" ? "items-end" : "items-center"
            )}
          >
            <Image
              src={LogoLight}
              alt="logo"
              height={size === "lg" ? 38 : 18}
              className="z-10"
            ></Image>
            <p
              className={cn(
                " text-white",
                headingFont.className,
                size === "lg" ? "text-3xl" : "text-base"
              )}
            >
              daily
              <span
                className={cn(
                  " font-normal text-neutral-500",
                  textFont.className,
                  size === "lg" ? "text-2xl" : "text-xs"
                )}
              >
                .quiz
              </span>
            </p>
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        className="border-none"
        side="right"
        hideWhenDetached={true}
        arrowPadding={10}
      >
        <Arrow className="fill-white"></Arrow>
        <p className="text-xs">Home</p>
      </TooltipContent>
    </Tooltip>
  );
};
