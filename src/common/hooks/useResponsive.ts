import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function useResponsive(): boolean {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return isDesktop;
}
