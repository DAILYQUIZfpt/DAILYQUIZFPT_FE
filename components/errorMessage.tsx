import React from "react";
import { AlertTriangle } from "lucide-react";

type ErrorMessageProps = {
  message: string;
  action: string;
  onClick: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onClick,
  action,
}) => {
  return (
    <div className="flex p-3 border border-[#a8b3cf33] border-l-4 border-l-[#e04337] flex-row items-center rounded-[16px]">
      <AlertTriangle className="h-6 w-6 mr-2 text-[#e04337]" />
      <div className="flex-1  text-[15px] leading-[20px] ">
        {message}
        <span
          onClick={onClick}
          className="ml-1 font-bold underline cursor-pointer"
        >
          {action}
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;
