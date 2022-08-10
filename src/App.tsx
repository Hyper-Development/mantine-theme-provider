import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import React from "react";
import Cards from "./components/Cards";
import LightAndDarkModeButton from "./components/LightDarkButton";
import { theme } from "./theme/themes";

function App() {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Paper radius={0} style={{ minHeight: "100vh", padding: "10px" }}>
          <LightAndDarkModeButton />
          <Cards />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
