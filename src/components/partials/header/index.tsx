import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { StyledEngineProvider } from "@mui/material/styles";
import clsx from "clsx";
import useResponsive from "../../../common/hooks/useResponsive";
import styles from "./styles.module.scss";
import Token from "./partials/token";
import Logo from "./partials/logo";
import Navbar from "./partials/navbar";
import ConnectMenu from './ConnectMenu';

const Header: FC = () => {
  const isDesktop = useResponsive();

  return (
    <StyledEngineProvider injectFirst>
      <div className={clsx("flex")}>
        <AppBar
          className={clsx(styles.header, isDesktop && styles.header__desktop)}
        >
          <Toolbar
            className={clsx(
              styles.header__toolbar,
              isDesktop && styles.header__toolbar__desktop
            )}
          >
            <div className="flex flex-grow">
              <Logo />
              {isDesktop && <Navbar />}
            </div>
            <div className={clsx("flex", isDesktop ? "gap-5" : "gap-2.5")}>
              <Token />
              <ConnectMenu />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </StyledEngineProvider>
  );
};

export default Header;
