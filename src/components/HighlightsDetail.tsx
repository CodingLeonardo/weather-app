import { FC, ReactNode } from "react";

interface HighlightsDetailProps {
  title: string;
  children: ReactNode;
}

const HighlightsDetail: FC<HighlightsDetailProps> = ({ title, children }) => {
  return (
    <div className="bg-[#1E213A] text-[#E7E7EB] p-4 flex flex-col items-center">
      <p className="font-medium text-base">{title}</p>
      {children}
    </div>
  );
};

export default HighlightsDetail;
