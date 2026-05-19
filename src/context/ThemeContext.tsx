import { useColorMode } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ isDark: true, toggle: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const { setColorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    setColorMode(isDark ? "dark" : "light");
  }, [isDark, setColorMode]);

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark((p) => !p) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);