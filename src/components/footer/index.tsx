import React, { FunctionComponent } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import ListItem from "../partials/list-item";
import styles from "./styles.module.scss";

interface Props {}

const Footer: FunctionComponent<Props> = props => {
  return (
    <StyledEngineProvider injectFirst>
      <footer className={styles.footer}>
        <ul className="w-3/4 flex">
          <ListItem href="/stake" text="Stake" />
          <ListItem href="/claim" text="Claim" />
          <ListItem href="/lock" text="Lock" />
        </ul>
      </footer>
    </StyledEngineProvider>
  );
};

Footer.defaultProps = {};

export default React.memo(Footer);
