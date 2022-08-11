import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React from "react";
import App from "../App";
import {
  ColorSchemeProvider,
  ColorSchemeType,
} from "../context/useColorScheme";
import {
  teamsContrastTheme,
  teamsDarkTheme,
  teamsTheme,
} from "../theme/themes";

const ThemedApp: React.FC<{}> = () => {
  const colorScheme = useLocalStorage<ColorSchemeType>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })[0];

  console.log(colorScheme);
  return (
    <ColorSchemeProvider initColorScheme={colorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={
          colorScheme === "dark"
            ? teamsDarkTheme
            : colorScheme === "contrast"
            ? teamsContrastTheme
            : teamsTheme
        }
      >
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ThemedApp;
