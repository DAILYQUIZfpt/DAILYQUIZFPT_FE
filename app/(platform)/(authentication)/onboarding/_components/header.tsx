import Link from "next/link";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const Header = () => {
  return (
    <header className="max-w-[1200px] px-[24px] mt-[24px] md:mt-20 w-full mx-auto flex items-center justify-between">
      <div className="text-white">logo</div>
      <div className="flex items-center gap-3">
        <span className="text-[#a8b3cf] text-sm cursor-pointer hidden md:block">
          Already a daily.quiz member?
        </span>
        <Button className="bg-inherit" size="lg" variant="outline" asChild>
          <Link
            href="/sign-in"
            className={cn("text-white font-bold font-sans", textFont)}
          >
            Login
          </Link>
        </Button>
      </div>
    </header>
  );
};
