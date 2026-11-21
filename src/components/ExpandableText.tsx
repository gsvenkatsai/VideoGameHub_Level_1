import { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <p className="text-sm text-zinc-600 dark:text-[#9aa0a6] leading-relaxed">{children}</p>;
  if (!children) return null;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <p className="text-sm text-zinc-600 dark:text-[#9aa0a6] leading-relaxed">
      {summary}
      <span
        className="ml-2 text-xs font-semibold text-zinc-500 dark:text-[#dadce0] cursor-pointer hover:text-zinc-700 dark:hover:text-white underline underline-offset-2 transition-colors duration-150"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </span>
    </p>
  );
};

export default ExpandableText;
