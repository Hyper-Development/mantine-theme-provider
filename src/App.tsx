import { Paper } from "@mantine/core";
import Cards from "./components/Cards";
import LightAndDarkModeButton from "./components/LightDarkButton";

function App() {
  return (
    <Paper
      radius={0}
      style={{ minHeight: "100vh", padding: "10px" }}
      sx={(th) => ({
        backgroundColor: th.white,
        color: th.black,
      })}
    >
      <LightAndDarkModeButton />
      <Cards />
    </Paper>
  );
}

export default App;
