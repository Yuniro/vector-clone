import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import useResponsive from "../../../common/hooks/useResponsive";
import styles from "../styles.module.scss";

interface Props {}

const { PUBLIC_URL } = process.env;

const HeaderLogo: FunctionComponent<Props> = props => {
  const isDesktop = useResponsive();
  return (
    <NavLink to="/">
      <div
        className={clsx("flex items-center ", isDesktop ? "py-5" : styles.logo)}
      >
        <span className={clsx(isDesktop ? "w-10 h-10" : "w-6 h-6")}>
          <img alt="logo" src={`${PUBLIC_URL}/assets/images/logo.svg`} />
        </span>
        {isDesktop && (
          <span className={clsx(styles["logo__text--desktop"])}>
            <img
              alt="logo-text"
              src={`${PUBLIC_URL}/assets/images/logo-text.svg`}
            />
          </span>
        )}
      </div>
    </NavLink>
  );
};

HeaderLogo.defaultProps = {
  isDesktop: false,
};

export default React.memo(HeaderLogo);
