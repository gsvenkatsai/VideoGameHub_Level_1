import { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <p className="dark:text-zinc-300">{children}</p>;
  if (!children) return null;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <p className="dark:text-zinc-300">
      {summary}
      <span
        className="ml-2 font-bold text-yellow-500 cursor-pointer hover:text-yellow-600 transition duration-200"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </span>
    </p>
  );
};

export default ExpandableText;
