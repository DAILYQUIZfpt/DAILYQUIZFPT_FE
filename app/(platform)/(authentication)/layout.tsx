import { ProgressBar } from "./onboarding/_components/progressbar";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0e1019] flex flex-col overflow-x-hidden items-center min-h-[100vh] w-full h-full max-h-[100vh] flex-1 z-max">
      <ProgressBar></ProgressBar>
      {children}
    </div>
  );
};

export default AuthenticationLayout;
