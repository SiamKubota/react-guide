import "../i18n";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { components, typography, palette } from "./theme/theme";

import EmployeeSearch from "./pages/EmployeeSearched";

const theme = createTheme({
  components: components,
  typography: typography,
  palette: palette,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmployeeSearch />
    </ThemeProvider>
  );
}

export default App;
