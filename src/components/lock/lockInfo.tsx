import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../common/hooks/useResponsive";
import styles from "../pool/styles.module.scss";
import lockStyles from "./styles.module.scss";

interface Props {
  increment: number;
  lockedValue: number;
  tvlValue: number;
  claimable: number;
}

const LockInfo: FunctionComponent<Props> = ({
  increment,
  lockedValue,
  tvlValue,
  claimable,
}) => {
  const isDesktop = useResponsive();
  const path = process.env.PUBLIC_URL;

  return (
    <Box
      className={clsx(
        "w-full flex items-center",
        styles.card__content,
        lockStyles.container
      )}
    >
      <Box
        className={clsx(
          "flex align-items-center",
          styles.card__content__info,
          isDesktop && styles.card__content__infoDesktop
        )}
      >
        <img
          alt="token-img"
          className={clsx(
            isDesktop
              ? styles["card__contentIcon--primaryDesktop"]
              : styles.card__contentIconDesktop
          )}
          src={`${path}/assets/icons/icon-vtx.svg`}
        />

        <Typography className={styles.card__content__deposit}>VTX</Typography>
      </Box>
      <Box className={clsx(styles.card__content__change)}>
        <Typography className={clsx(styles.headerText)}>APR</Typography>

        <Box className="flex items-center">
          <Typography
            className={clsx(styles.headerText, styles["headerText--increment"])}
          >{`${increment} %`}</Typography>
          <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
        </Box>
      </Box>
      {isDesktop && (
        <>
          <Box className={clsx(styles.card__content__stake)}>
            <Typography className={clsx(styles.headerText)}>Locked</Typography>
            <Box>
              <Typography
                className={clsx(styles.card__content__deposit, styles.clrFade)}
              >
                {`${lockedValue} VTX`}
              </Typography>
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__claim)}>
            <Typography className={clsx(styles.headerText)}>TVL</Typography>
            <Box>
              <Typography className={styles.card__content__deposit}>
                {`${tvlValue}`}
              </Typography>
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__claim)}>
            <Typography className={clsx(styles.headerText)}>
              Claimable
            </Typography>
            <Box className="flex  items-center">
              <Typography
                className={clsx(styles.card__content__deposit, styles.clrFade)}
              >
                {`${claimable}`}
              </Typography>
              <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__extra)}></Box>
        </>
      )}
    </Box>
  );
};

export default React.memo(LockInfo);
