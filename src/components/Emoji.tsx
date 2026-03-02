import fire from "../assets/fires.png";
import smile from "../assets/happy-face.png";
import ok from "../assets/like.png";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emoji: { [key: number]: { src: string; alt: string } } = {
    3: { src: ok, alt: "Ok" },
    4: { src: smile, alt: "Very Good" },
    5: { src: fire, alt: "Most Popular" },
  };
  const selected = emoji[Math.round(rating)];
  if (!selected) return null;
  return (
    <img
      src={selected.src}
      alt={selected.alt}
      className="w-10 h-10 ml-2 inline-block"
    />
  );
};

export default Emoji;
