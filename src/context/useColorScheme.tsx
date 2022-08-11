import { useLocalStorage } from "@mantine/hooks";
import React from "react";

export type ColorSchemeType = "light" | "dark" | "contrast";

interface IColorSchemeContext {
  colorScheme: ColorSchemeType | undefined;
  setColorScheme: (colorScheme: ColorSchemeType) => void;
}

const ColorSchemeContext = React.createContext<IColorSchemeContext>({
  colorScheme: "light",
  setColorScheme: (colorScheme: ColorSchemeType) => undefined,
});

interface IColorSchemeProviderProps {
  initColorScheme?: ColorSchemeType;
  onChange: (colorScheme: ColorSchemeType) => void;
}

const ColorSchemeProvider: React.FC<
  React.PropsWithChildren<IColorSchemeProviderProps>
> = (props) => {
  const { children, initColorScheme, onChange } = props;
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>(
    initColorScheme || "light"
  );

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme: colorScheme,
        setColorScheme: (colorScheme) => {
          setColorScheme(colorScheme);
          localStorage.setItem("mantine-color-scheme", colorScheme);
          onChange(colorScheme);
        },
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

const useColorScheme = () => {
  const context = React.useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error("useColorScheme must be within ColorSchemeProvider");
  }

  return context;
};

export { ColorSchemeProvider, useColorScheme };
