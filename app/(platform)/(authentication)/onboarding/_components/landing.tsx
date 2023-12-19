import { CheckEmailForm } from "./checkemailform";
import { SignInWithGoogle } from "./google";

export const Landing = () => {
  return (
    <main className="text-white mb-8 mt-8 px-6 flex flex-wrap w-full max-w-[1200px] flex-grow">
      <div className="flex flex-1 flex-col max-w-[440px] w-full">
        <h1 className="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc538d]  to-[#ce3df3] text-5xl leading-[56px]  ">
          Where developers suffer together
        </h1>
        <h2 className="text-white mb-8  text-[23px] leading-[30px]">
          We know how hard it is to be a developer. It doesn&apos;t have to be.
          Personalized news feed, dev community and search, much better than
          what&rsquo;s out there. Maybe ;)
        </h2>
        <div className="flex overflow-y-auto z-1 flex-col w-full rounded max-w-full">
          <CheckEmailForm />
          <div className="flex justify-center items-center mb-8 text-[#a8b3cfa3]">
            <div className="flex-1 h-px bg-[#a8b3cf33]"></div>
            <span className="px-3 text-[15px] leading-[20px]">
              Or sign up with
            </span>
            <div className="flex-1 h-px bg-[#a8b3cf33]"></div>
          </div>
        </div>
        <div className="flex pb-8 justify-between">
          <SignInWithGoogle></SignInWithGoogle>
        </div>
      </div>
    </main>
  );
};
