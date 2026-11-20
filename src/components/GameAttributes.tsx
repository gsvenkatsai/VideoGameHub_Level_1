import type { Game } from "../entities/Game";
import { useTheme } from "../context/ThemeContext";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const { isDark } = useTheme();

  const cardStyle = {
    padding: "0.875rem",
    borderRadius: "0.75rem",
    backgroundColor: isDark ? "#161718" : "#f4f4f5",
    border: `1px solid ${isDark ? "#2a2a2a" : "#e4e4e7"}`,
  };

  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: isDark ? "#5f6368" : "#71717a",
    marginBottom: "0.375rem",
  };

  const valueStyle = {
    fontSize: "0.8rem",
    color: isDark ? "#dadce0" : "#18181b",
    lineHeight: "1.6",
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