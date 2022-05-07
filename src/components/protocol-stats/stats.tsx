import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

interface Props {
  isDesktop: boolean;
}

const Stats: FunctionComponent<Props> = ({ isDesktop }) => {
  const stats = [
    { title: "TOTAL VALUE LOCKED", value: "$360,090,605 USD" },
    { title: "TOTAL PTP CONVERTED", value: "4,175,812.4 PTP" },
    { title: "VECTOR vePTP BALANCE", value: "32,798,763.1 vePTP" },
    { title: "VTX CIRCULATING SUPPLY", value: "16,306,500.76 VTX" },
    { title: "TOTAL VTX LOCKED", value: "9,024,162.19 VTX" },
  ];
  return (
    <Box
      className={clsx(
        styles.statContent,
        isDesktop && styles["statContent--desktop"]
      )}
    >
      {stats.map((st, idx) => (
        <Box key={`st_${idx}`} className={clsx(styles.statContentItem)}>
          <Typography className={clsx(styles.statContentItemTitle)}>
            {st.title}
          </Typography>
          <Typography className={clsx(styles.statContentItemValue)}>
            {st.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

Stats.defaultProps = {};

export default React.memo(Stats);
