import { Button } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <p>{children}</p>;
  if (!children) return null;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <p>
      {summary}
      <br />
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </p>
  );
};

export default ExpandableText;
