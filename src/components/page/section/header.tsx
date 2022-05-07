import React, { FunctionComponent } from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface Props {
  children?: JSX.Element | string;
  isLarge?: boolean;
}

const PageSectionHeader: FunctionComponent<Props> = ({ children, isLarge }) => {
  return (
    <Typography
      variant="h2"
      component="h2"
      className={clsx(
        "flex",
        "whitespace-nowrap",
        "items-center",
        "font-semibold",
        "text-white",
        "uppercase",
        styles.section__header,
        isLarge && styles["section__header--large"]
      )}
    >
      {children}
    </Typography>
  );
};

PageSectionHeader.defaultProps = {
  isLarge: false,
};
export default PageSectionHeader;
