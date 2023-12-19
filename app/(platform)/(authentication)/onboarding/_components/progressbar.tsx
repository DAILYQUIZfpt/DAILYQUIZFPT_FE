"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const progressWidth = useSelector(
    (state: RootState) => state.app.progressWidth
  );

  return (
    <div>
      <meter
        style={{ width: `${progressWidth}%` }}
        className="absolute h-1 left-0 bg-[#ce3df3] appearance-none transition-[width]"
      ></meter>
    </div>
  );
};
