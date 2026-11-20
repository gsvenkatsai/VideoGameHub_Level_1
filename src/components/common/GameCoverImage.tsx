import React, { useState } from "react";

interface GameCoverImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const GameCoverImage: React.FC<GameCoverImageProps> = ({
  src,
  alt = "Game cover",
  fallbackTitle,
  className = "",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br from-[#0E1322] via-[#111726] to-[#070A12] border border-white/10 text-center select-none ${className}`}
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-1 font-mono text-xs font-bold">
          🎮
        </div>
        <span className="font-mono text-[10px] font-bold text-zinc-300 tracking-wider uppercase line-clamp-2 px-1">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};

export default GameCoverImage;
