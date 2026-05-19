import type { Game } from "../entities/Game";
import { useTheme } from "../context/ThemeContext";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const { isDark } = useTheme();

  const cardStyle = {
    padding: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: isDark ? "#5a5a7a" : "#e4e4e7",
    border: `1px solid ${isDark ? "#6060a0" : "transparent"}`,
  };

  const labelStyle = {
    fontSize: "0.7rem",
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: isDark ? "#a0a0d0" : "#71717a",
    marginBottom: "0.25rem",
  };

  const valueStyle = {
    fontSize: "0.875rem",
    color: isDark ? "#ffffff" : "#18181b",
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
      <div style={cardStyle}>
        <p style={labelStyle}>Platforms</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0 0.5rem" }}>
          {game.parent_platforms?.map((p) => (
            <span key={p.platform.id} style={valueStyle}>{p.platform.name}</span>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={labelStyle}>Genres</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0 0.5rem" }}>
          {game.genres.map((genre) => (
            <span key={genre.id} style={valueStyle}>{genre.name}</span>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={labelStyle}>Publishers</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0 0.5rem" }}>
          {game.publishers?.map((publisher) => (
            <span key={publisher.id} style={valueStyle}>{publisher.name}</span>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={labelStyle}>Released</p>
        <span style={valueStyle}>{game.released}</span>
      </div>
    </div>
  );
};

export default GameAttributes;