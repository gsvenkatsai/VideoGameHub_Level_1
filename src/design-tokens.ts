/**
 * CLUTCH IT // ARCHIVE DESIGN TOKENS
 * Strict design system specifications for next-gen game discovery.
 */

export const TOKENS = {
  colors: {
    // Surfaces
    background: "#05070D",
    surface: "#0B0F1A",
    surfaceElevated: "#111726",
    surfaceGlass: "rgba(11, 15, 26, 0.75)",

    // Borders
    borderSubtle: "rgba(255, 255, 255, 0.06)",
    borderMedium: "rgba(255, 255, 255, 0.12)",
    borderHover: "rgba(34, 211, 238, 0.4)",

    // Accents
    cyan: "#22D3EE",
    cyanGlow: "rgba(34, 211, 238, 0.25)",
    violet: "#C77DFF",
    violetGlow: "rgba(199, 125, 255, 0.25)",

    // Signature Warm Accent (Reserved for scores, hot/trending, and signature hover)
    amber: "#FFB020",
    amberGlow: "rgba(255, 176, 32, 0.3)",

    // Metacritic Official Classification
    metacritic: {
      high: "#22C55E", // 75+ Green
      highBg: "rgba(34, 197, 94, 0.12)",
      highBorder: "rgba(34, 197, 94, 0.4)",

      medium: "#EAB308", // 50-74 Yellow/Amber
      mediumBg: "rgba(234, 179, 8, 0.12)",
      mediumBorder: "rgba(234, 179, 8, 0.4)",

      low: "#EF4444", // <50 Red
      lowBg: "rgba(239, 68, 68, 0.12)",
      lowBorder: "rgba(239, 68, 68, 0.4)",
    },

    // Typography
    textPrimary: "#FFFFFF",
    textSecondary: "#A1A8B8", // Minimum WCAG AA contrast (5.2:1 against #05070D)
    textMuted: "#6B7280",
    textInverse: "#05070D",
  },

  radii: {
    card: "20px",
    cardSm: "16px",
    button: "12px",
    badge: "6px",
    pill: "9999px",
  },

  typography: {
    fontDisplay: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontBody: "Inter, system-ui, -apple-system, sans-serif",
    fontMono: "'JetBrains Mono', 'Space Mono', Consolas, monospace",
    letterSpacingWide: "0.12em",
  },

  transitions: {
    snappy: "cubic-bezier(0.16, 1, 0.3, 1)",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export default TOKENS;
