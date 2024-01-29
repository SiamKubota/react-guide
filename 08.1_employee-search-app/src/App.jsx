import { createTheme, ThemeProvider } from "@mui/material/styles";

import { THEME_COLORS } from "./theme/colors";

import EmployeeSearchedPage from "./pages/EmployeeSearched";

const theme = createTheme({
  palette: THEME_COLORS,
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EmployeeSearchedPage />
      </ThemeProvider>
    </>
  );
}

{
  /* <div>Hello World</div> */
}
export default App;
