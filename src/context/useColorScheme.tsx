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
}

const ColorSchemeProvider: React.FC<
  React.PropsWithChildren<IColorSchemeProviderProps>
> = (props) => {
  const { children, initColorScheme } = props;

  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>(
    initColorScheme || "light"
  );
  const setLocalStorage = useLocalStorage<ColorSchemeType>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })[1];

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme: colorScheme,
        setColorScheme: (colorScheme) => {
          setColorScheme(colorScheme);
          setLocalStorage(colorScheme);
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
