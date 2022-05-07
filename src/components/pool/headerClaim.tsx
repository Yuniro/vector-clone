import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

interface Props {}

const PoolsTableHeaderClaim: FunctionComponent<Props> = () => {
  const isDesktop = useResponsive();

  return (
    <Box className={clsx("items-center", isDesktop ? "flex" : "hidden")}>
      <Box
        className={clsx(styles.poolsTableHeader, "flex items-center w-full")}
      >
        <Box className={styles.card__content__infoDesktop}>
          <Typography className={styles.headerText}>Pool Name</Typography>
        </Box>
        <Box
          className={clsx(
            styles.card__content__change,
            "!flex-row items-center"
          )}
        >
          <Typography className={styles.headerText}>APR</Typography>
          <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
        </Box>
        <Box className={clsx(styles.card__content__stake)}>
          <Typography className={styles.headerText}>Your deposits</Typography>
        </Box>
        <Box className={styles.card__content__claim}>
          <Typography className={styles.headerText}>Claimable</Typography>
        </Box>
        <Box
          className={clsx(styles.card__content__extra, "flex justify-end")}
        ></Box>
      </Box>
    </Box>
  );
};

export default React.memo(PoolsTableHeaderClaim);
