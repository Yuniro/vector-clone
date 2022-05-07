import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Link, Typography } from "@mui/material";
import { ModelPoolInfo } from "../../common/models";
import { TabPanel, TabPanelProps } from "../tabs";
import styles from "./styles.module.scss";

interface Props extends TabPanelProps {
  infos?: ModelPoolInfo[];
}

const TabInfo: FunctionComponent<Props> = ({ infos, value, index }) => {
  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <Box className="gap-4 flex flex-col">
          {infos?.map((item, idx) => (
            <Box className="flex items-center" key={`info_${idx}`}>
              <Typography className={clsx(styles.smallText)}>
                {`${item.title}:`}
              </Typography>
              <Link
                href={`https://snowtrace.io/address/${item.id}`}
                className={styles.clrFade}
                color="inherit"
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                {item.id}
              </Link>
            </Box>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
};

TabInfo.defaultProps = {};

export default React.memo(TabInfo);
