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
    background: {
      paper: "#16162c",
    },
  },
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
  },
  status: {},
});

export default theme;
