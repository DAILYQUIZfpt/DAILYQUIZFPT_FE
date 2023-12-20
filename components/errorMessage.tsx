import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  <div className="flex p-3 border border-[#a8b3cf33] border-l-4 border-l-[#e04337] flex-row items-center rounded-[16px]">
    <AlertTriangle className="h-6 w-6 mr-2 text-[#e04337]" />
    <div className="flex-1 flex text-[15px] leading-[20px] gap-1 ">
      Email is taken. Existing user?
      <button type="button" className="font-bold underline ">
        Log in.
      </button>
    </div>
  </div>;
};
