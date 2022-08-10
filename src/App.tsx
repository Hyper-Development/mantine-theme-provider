import { Paper, useMantineColorScheme } from "@mantine/core";
import Cards from "./components/Cards";
import LightAndDarkModeButton from "./components/LightDarkButton";

function App() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Paper
      radius={0}
      style={{ minHeight: "100vh", padding: "10px" }}
      sx={(th) => ({
        backgroundColor:
          colorScheme === "dark"
            ? th.colors[th.primaryColor][9]
            : th.colors[th.primaryColor][0],
      })}
    >
      <LightAndDarkModeButton />
      <Cards />
    </Paper>
  );
}

export default App;
