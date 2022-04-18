import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import SectionHeader from "./header";
import styles from "./styles.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PageSection: FunctionComponent<Props> = ({ children }) => {
  return <Box className={styles.section}>{children}</Box>;
};

PageSection.defaultProps = {};

export { SectionHeader };

export default PageSection;
