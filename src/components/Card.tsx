import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div
      className="
        bg-white
        dark:bg-gray-600
        rounded-xl
        shadow-md
        hover:shadow-2xl
        transition duration-300
        p-4
        overflow-hidden
    "
    >
      {children}
    </div>
  );
};

export default Card;
