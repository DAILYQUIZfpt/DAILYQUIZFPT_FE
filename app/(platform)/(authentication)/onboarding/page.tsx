"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { Landing } from "./_components/landing";
import { LoginForm } from "./_components/loginform";
import { Login } from "./_components/login";

const OnBoardingPage = () => {
  const dispatch = useDispatch();
  const isOpenLanding = useSelector(
    (state: RootState) => state.app.isOpenLanding
  );
  const isOpenLogin = useSelector((state: RootState) => state.app.isOpenLogin);
  console.log("landing", isOpenLanding);
  console.log("isOpenLogin", isOpenLogin);
  return (
    <>
      {isOpenLanding && <Landing></Landing>}
      {isOpenLogin && <Login></Login>}
    </>
  );
};

export default OnBoardingPage;
