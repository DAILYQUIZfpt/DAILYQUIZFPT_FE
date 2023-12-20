import { Logo } from "@/components/logo";
import { LogInButton } from "./loginbutton";
import { LoginForm } from "./loginform";

export const Login = () => {
  const loginMethod = [
    {
      method: "facebook",
      tailwind: "w-full text-[#0e1217] py-5 ",
      variant: "outline",
    },
    {
      method: "google",
      tailwind: "w-full text-[#0e1217] py-5",
      variant: "outline",
    },
    {
      method: "apple",
      tailwind: "w-full text-[#0e1217] py-5",
      variant: "outline",
    },
  ];
  return (
    <main className="w-full ">
      <div className="px-10 py-8 w-full flex justify-start">
        <Logo></Logo>
      </div>
      <div className="flex mx-auto flex-wrap justify-center w-full px-6 max-w-[1200px] flex-grow">
        <div className="flex overflow-y-auto z-1 flex-col max-w-[480px] w-full h-full text-white">
          <h2 className="text-2xl font-bold text-center">Log in</h2>
          <div className="mt-6 w-full md:px-[60px] px-6 flex flex-col gap-3 self-center">
            <div className="flex flex-col gap-4">
              {loginMethod.map((method, index) => (
                <LogInButton
                  key={index}
                  method={method.method}
                  tailwind={method.tailwind}
                  variant="outline"
                ></LogInButton>
              ))}
            </div>
            <div className="flex justify-center items-center text-[#a8b3cfa3]">
              <div className="flex-1 h-px bg-[#a8b3cf33]"></div>
              <span className="px-3 text-[15px] leading-[20px]">or</span>
              <div className="flex-1 h-px bg-[#a8b3cf33]"></div>
            </div>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </main>
  );
};
