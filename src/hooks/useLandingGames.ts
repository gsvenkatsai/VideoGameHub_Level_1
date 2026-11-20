import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";
import type { Game } from "../entities/Game";
import { LOCAL_GAMES } from "../Data/localGames";

const searchClient = new APIClient<Game>("/games");

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

export const useLandingSearch = (searchText: string) => {
  const debouncedText = useDebounce(searchText.trim(), 280);

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["landing-search", debouncedText],
    queryFn: () =>
      searchClient.getAll({
        params: {
          search: debouncedText,
          page_size: 6,
        },
      }),
    enabled: debouncedText.length >= 2,
    staleTime: 60 * 1000,
  });
};

export const useTopCuratedGames = () => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["landing-spotlight-top"],
    queryFn: () =>
      searchClient.getAll({
        params: {
          ordering: "-metacritic",
          page_size: 8,
        },
      }),
    staleTime: 12 * 60 * 60 * 1000, // 12 hours
    // If RAWG fails or rate limits, fallback gracefully
    onError: () => {},
  });
};

/**
 * Extracts dominant color from image element or URL, with instant fallback
 */
export const extractDominantColor = (
  imageUrl: string,
  fallbackColor = "#22D3EE"
): Promise<string> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(fallbackColor);
      return;
    }

    // Match known hits for instant 0ms coloring
    const knownMatch = LOCAL_GAMES.find((g) => imageUrl.includes(g.slug as string) || g.background_image === imageUrl);
    if (knownMatch) {
      resolve(knownMatch.accentColor);
      return;
    }

    try {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageUrl;

      const timer = setTimeout(() => {
        resolve(fallbackColor);
      }, 800);

      img.onload = () => {
        clearTimeout(timer);
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve(fallbackColor);
            return;
          }
          canvas.width = 16;
          canvas.height = 16;
          ctx.drawImage(img, 0, 0, 16, 16);
          const data = ctx.getImageData(0, 0, 16, 16).data;
          let r = 0, g = 0, b = 0, count = 0;
          for (let i = 0; i < data.length; i += 16) {
            // Sample vivid pixels, avoiding pure black/white
            const pr = data[i], pg = data[i + 1], pb = data[i + 2];
            const max = Math.max(pr, pg, pb);
            const min = Math.min(pr, pg, pb);
            if (max > 40 && min < 220 && (max - min) > 20) {
              r += pr;
              g += pg;
              b += pb;
              count++;
            }
          }
          if (count > 0) {
            r = Math.round(r / count);
            g = Math.round(g / count);
            b = Math.round(b / count);
            const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
            resolve(hex);
          } else {
            resolve(fallbackColor);
          }
        } catch {
          resolve(fallbackColor);
        }
      };

      img.onerror = () => {
        clearTimeout(timer);
        resolve(fallbackColor);
      };
    } catch {
      resolve(fallbackColor);
    }
  });
};
