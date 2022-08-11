import { MantineThemeOverride } from "@mantine/core";

export const teamsTheme: MantineThemeOverride = {
  colors: {
    teams: [
      "#CBCCDD",
      "#B1B2D1",
      "#9698C9",
      "#7A7CC5",
      "#5B5FC7",
      "#5155B4",
      "#50529B",
      "#4E5085",
      "#4B4D73",
      "#474864",
    ],
  },
  primaryColor: "teams",
  colorScheme: "light",
  black: "#000000",
  white: "#FFFFFF",
  primaryShade: 4,
};

export const teamsDarkTheme: MantineThemeOverride = {
  colors: {
    "teams-dark": [
      "#FDFDFD",
      "#E8E8F1",
      "#D3D3E7",
      "#BDBEE0",
      "#A6A7DC",
      "#9899CF",
      "#8D8DC1",
      "#8283B4",
      "#7A7AA7",
      "#72729B",
    ],
  },
  primaryColor: "teams-dark",
  colorScheme: "dark",
  black: "#f8f8f8",
  white: "#333333",
  primaryShade: 4,
};

export const teamsContrastTheme: MantineThemeOverride = {
  colors: {
    "teams-contrast": [
      "#D6D686",
      "#D9D96A",
      "#E0E04B",
      "#ECEC28",
      "#FFFF01",
      "#D9D913",
      "#B9B920",
      "#9F9F29",
      "#89892E",
      "#787831",
    ],
  },
  primaryColor: "teams-contrast",
  colorScheme: "dark",
  black: "#ffff70",
  white: "#000000",
  primaryShade: 4,
};

export const iseagTheme: MantineThemeOverride = {
  colors: {
    iseag: [
      "#D2B3C3",
      "#C492AB",
      "#BB7197",
      "#B74F85",
      "#AD3A75",
      "#A12967",
      "#822C58",
      "#6A2B4C",
      "#572A41",
      "#482738",
    ],
  },
  primaryColor: "iseag",
  colorScheme: "light",
  black: "#000000",
  white: "#FFFFFF",
  primaryShade: 5,
};

// let currentTheme = "";

// export function loadThemeByName(themeName: string) {
//   if (currentTheme !== themeName) {
//     currentTheme = themeName;
//     const theme = themes[themeName] || {};
//     loadTheme(theme);
//   }
// }

// export function loadThemeByContext(
//   webpartContext: WebPartContext,
//   onThemeChange?: (theme: string) => void
// ) {
//   const teamsCtx = webpartContext?.sdks?.microsoftTeams?.context;
//   const themeName = (teamsCtx && (teamsCtx?.theme || "default")) || "";
//   loadThemeByName(themeName);
//   const register =
//     webpartContext?.sdks?.microsoftTeams?.teamsJs?.registerOnThemeChangeHandler;
//   if (register) {
//     register((theme: string) => {
//       console.log(`theme changed to: ${theme}`);
//       loadThemeByName(theme);
//       if (onThemeChange) {
//         onThemeChange(theme);
//       }
//     });
//   }
// }
