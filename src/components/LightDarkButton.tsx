import { ActionIcon, useMantineTheme } from "@mantine/core";
import { useColorScheme } from "../context/useColorScheme";

function LightAndDarkModeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const theme = useMantineTheme();
  const light = colorScheme === "light";
  const dark = colorScheme === "dark";
  const contrast = colorScheme === "contrast";

  return (
    <ActionIcon
      variant="outline"
      color={theme.primaryColor}
      onClick={() =>
        setColorScheme(dark ? "contrast" : contrast ? "light" : "dark")
      }
      title="Toggle color scheme"
    >
      {dark && "🌙"}
      {light && "🌞"}
      {contrast && "C"}
    </ActionIcon>
  );
}
export default LightAndDarkModeButton;
