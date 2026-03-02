interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let colorClass =
    score > 80 ? "bg-green-500" : score > 60 ? "bg-yellow-500" : "bg-red-500";
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${colorClass} text-white`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
