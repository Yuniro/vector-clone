import React, { FunctionComponent } from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface Props {
  children: JSX.Element | string;
}

const PageSectionHeader: FunctionComponent<Props> = ({ children }) => {
  return (
    <Typography
      variant="h2"
      component="h2"
      className={clsx(
        "flex",
        "whitespace-nowrap",
        "items-center",
        "font-semibold",
        "uppercase",
        styles.section__header
      )}
    >
      {children}
    </Typography>
  );
};

PageSectionHeader.defaultProps = {};
export default PageSectionHeader;
