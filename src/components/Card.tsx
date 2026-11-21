import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div
      className="
        group relative rounded-xl
        bg-white dark:bg-[#111215]
        border border-zinc-200/90 dark:border-white/10
        hover:border-zinc-300 dark:hover:border-white/25
        hover:bg-zinc-50/80 dark:hover:bg-[#15161a]
        shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)]
        hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.75)]
        transition-all duration-200 ease-out
        hover:-translate-y-1
        overflow-hidden
        cursor-pointer
      "
    >
      {children}
    </div>
  );
};

export default Card;
