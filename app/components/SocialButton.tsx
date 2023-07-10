import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
}

export const SocialButton: React.FC<Props> = ({
  children,
  bgColor = "black",
}) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "dribble":
      bgHoverColorClass = "hover:bg-dribble";
      break;
    case "instagram":
      bgHoverColorClass = "hover:bg-instagram";
      break;
    case "twitter":
      bgHoverColorClass = "hover:bg-twitter";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin";
      break;
  }

  return (
    <button
      className={`group h-12 bg-[#d9d9d9] ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out justify-center w-9 h-9 `}
    >
      <div className="fill-black group-hover:fill-[#d9d9d9] transition-colors duration-200 ease-in-out ">
        {children}
      </div>
    </button>
  );
};
