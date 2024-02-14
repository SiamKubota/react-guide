import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { THEME_COLORS } from "./theme/colors";

import EmployeeSearchedPage from "./pages/EmployeeSearched";

const components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: Kanit;
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:  url('https://skc-fonts.azureedge.net/fonts/Kanit/truetype/Kanit-Regular.ttf') format('truetype'),
              url('https://skc-fonts.azureedge.net/fonts/Kanit/truetype/Kanit-Bold.ttf') format('truetype');
      }
    `,
  },
  // MuiTextField: {
  //   variants: [
  //     {
  //       props: { size: "extraSmall" },
  //       style: {
  //         "& .MuiInputLabel-root": {
  //           transform: "translate(14px, 6px) scale(1)",
  //           "&.Mui-focused": {
  //             transform: "translate(14px, -6px) scale(.75)",
  //           },
  //         },
  //         "& .MuiInputBase-sizeExtraSmall": {
  //           "& > input": {
  //             padding: "4px 7px",
  //           },
  //         },
  //       },
  //     },
  //   ],
  // },
};

const typography = {
  fontFamily: "Kanit",
};

const theme = createTheme({
  palette: THEME_COLORS,
  components,
  typography,
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EmployeeSearchedPage />
      </ThemeProvider>
    </>
  );
}

{
  /* <div>Hello World</div> */
}
export default App;
