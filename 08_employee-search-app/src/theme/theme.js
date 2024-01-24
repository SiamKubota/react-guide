import { THEME_COLORS } from "./colors";

export const components = {
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
};

export const palette = {
  background: {
    default: "#F0FDFB",
  },
  primary: THEME_COLORS.primary,
  secondary: THEME_COLORS.secondary,
  tertiary: THEME_COLORS.tertiary,
};

export const typography = {
  fontFamily: "Kanit",
};
