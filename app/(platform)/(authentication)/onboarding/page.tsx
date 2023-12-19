import { Header } from "./_components/header";
import { Landing } from "./_components/landing";
import { ProgressBar } from "./_components/progressbar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/_options";
const OnBoardingPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <>
      <ProgressBar></ProgressBar>
      <Header></Header>
      <Landing></Landing>
    </>
  );
};

export default OnBoardingPage;
