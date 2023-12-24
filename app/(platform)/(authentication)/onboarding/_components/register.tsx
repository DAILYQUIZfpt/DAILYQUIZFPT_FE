import { Logo } from "@/components/logo";
import { RegisterForm } from "./registerform";

export const Register = () => {
  return (
    <main className="w-full ">
      <div className="px-10 py-8 w-full flex justify-start">
        <Logo size="sm"></Logo>
      </div>
      <div className="flex mx-auto flex-wrap justify-center w-full px-6 max-w-[1200px] flex-grow">
        <div className="flex overflow-y-auto z-1 flex-col max-w-[480px] w-full h-full text-white">
          <h2 className="text-2xl font-bold text-center">Sign up</h2>
          <div className="flex flex-col mt-6 w-full gap-2 self-center place-items-center flex-1 pb-2 md:px-[60px] px-6">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </main>
  );
};
