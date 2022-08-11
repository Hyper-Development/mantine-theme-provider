import { ActionIcon, useMantineTheme } from "@mantine/core";
import { useColorScheme } from "../context/useColorScheme";

function LightAndDarkModeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const theme = useMantineTheme();

  return (
    <ActionIcon
      variant="outline"
      color={theme.primaryColor}
      onClick={() =>
        setColorScheme(
          colorScheme === "dark"
            ? "contrast"
            : colorScheme === "contrast"
            ? "light"
            : "dark"
        )
      }
      title="Toggle color scheme"
    >
      {colorScheme === "dark" && "🌙"}
      {colorScheme === "light" && "🌞"}
      {colorScheme === "contrast" && "C"}
    </ActionIcon>
  );
}
export default LightAndDarkModeButton;
