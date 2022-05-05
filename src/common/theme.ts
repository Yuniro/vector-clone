import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#24244a",
    },
    secondary: {
      main: "#c7c7e1",
    },
    background: {
      paper: "#16162c",
    },
  },
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
    fontSize: 14,
    body1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1,
    },
  },
  status: {},
});

export default theme;
