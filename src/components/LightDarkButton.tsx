import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

function LightAndDarkModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={theme.primaryColor}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? "🌞" : "🌚"}
    </ActionIcon>
  );
}
export default LightAndDarkModeButton;
