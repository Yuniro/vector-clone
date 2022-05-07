import React, { FunctionComponent } from "react";
import clsx from "clsx";
import { Typography } from "@mui/material";
import useResponsive from "../../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

interface Props {
  children: JSX.Element | string;
}

const PageTitle: FunctionComponent<Props> = ({ children }) => {
  const isDesktop = useResponsive();
  return (
    <Typography
      variant="h1"
      component="h1"
      className={clsx(styles.title, !isDesktop && "hidden")}
    >
      {children}
    </Typography>
  );
};

PageTitle.defaultProps = {};
export default PageTitle;
