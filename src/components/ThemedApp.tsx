import { MantineProvider } from "@mantine/core";
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
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>(
    (localStorage.getItem("mantine-color-scheme") as ColorSchemeType) || "light"
  );

  return (
    <ColorSchemeProvider
      initColorScheme={colorScheme}
      onChange={setColorScheme}
    >
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
