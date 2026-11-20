interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  if (!score) return null;
  const isHigh = score > 80;
  const isMed = score > 60;

  const colorClass = isHigh
    ? "border-emerald-600/40 bg-emerald-50 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/10 dark:text-emerald-400"
    : isMed
    ? "border-amber-600/40 bg-amber-50 text-amber-700 dark:border-amber-500/50 dark:bg-amber-500/10 dark:text-amber-400"
    : "border-rose-600/40 bg-rose-50 text-rose-700 dark:border-rose-500/50 dark:bg-rose-500/10 dark:text-rose-400";

  return (
    <span
      className={`px-2 py-0.5 text-[11px] font-mono font-semibold rounded border ${colorClass} tabular-nums`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
