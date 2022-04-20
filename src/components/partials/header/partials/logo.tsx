import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import useResponsive from "../../../../common/hooks/useResponsive";
import Svg from "../../Svg";
import styles from "../styles.module.scss";

interface Props {}

const { PUBLIC_URL } = process.env;

const HeaderLogo: FunctionComponent<Props> = (props) => {
  const isDesktop = useResponsive();
  return (
    <NavLink to="/">
      <div
        className={clsx("flex items-center ", isDesktop ? "py-5" : styles.logo)}
      >
        <span className={clsx(isDesktop ? "w-10 h-10" : "w-6 h-6")}>
          <img alt="logo" src={`${PUBLIC_URL}/images/logo.svg`} />
        </span>
        <span
          className={clsx(
            isDesktop ? "ml-3.5 mr-9" : styles.logo__text__desktop
          )}
        >
          <Svg type="logo-text" />
        </span>
      </div>
    </NavLink>
  );
};

HeaderLogo.defaultProps = {
  isDesktop: false,
};

export default React.memo(HeaderLogo);
