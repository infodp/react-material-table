import { createTheme, ThemeProvider } from "@mui/material";
import TableBasic from "./components/TableBasic";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TableBasic />
    </ThemeProvider>
  );
}

export default App;
