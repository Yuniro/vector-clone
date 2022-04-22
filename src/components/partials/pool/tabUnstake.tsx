import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Link, Typography, Button } from "@mui/material";
import { ModelPool } from "../../../common/models";
import { TabPanel, TabPanelProps } from "../tabs";
import styles from "./styles.module.scss";

interface Props extends TabPanelProps {
  pool: ModelPool;
}

const TabUnstake: FunctionComponent<Props> = ({ pool, value, index }) => {
  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <Box className="gap-4 flex flex-col">
          <Button variant="contained">unstake</Button>
        </Box>
      </TabPanel>
    </Box>
  );
};

TabUnstake.defaultProps = {};

export default React.memo(TabUnstake);
