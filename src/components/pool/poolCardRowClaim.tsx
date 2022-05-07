import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../common/hooks/useResponsive";
import { ModelPool, PoolType } from "../../common/models";
import styles from "./styles.module.scss";

interface Props {
  pool: ModelPool;
}

const PoolCardRowClaim: FunctionComponent<Props> = ({ pool }) => {
  const isDesktop = useResponsive();
  const path = process.env.PUBLIC_URL;

  return (
    <Box className={clsx("w-full flex items-center", styles.card__content)}>
      <Box
        className={clsx(
          "flex justify-start",
          styles.card__content__info,
          isDesktop && styles.card__content__infoDesktop
        )}
      >
        <img
          alt="token-img"
          className={clsx(
            pool.type === PoolType.STAKED
              ? styles["card__contentIcon--primary"]
              : styles.card__contentIcon,
            isDesktop &&
              (pool.type === PoolType.STAKED
                ? styles["card__contentIcon--primaryDesktop"]
                : styles.card__contentIconDesktop)
          )}
          src={`${path}/assets/icons/${pool.token.icon}.svg`}
        />
        <Box
          className={clsx(
            "flex flex-col flex-wrap justify-center",
            styles.card__content__infoName
          )}
        >
          <Typography className={styles.card__content__name}>
            {`Staked ${pool.token.name}`}
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(styles.card__content__change)}>
        <Box className="flex items-center">
          <Typography
            className={clsx(styles.headerText, styles["headerText--increment"])}
          >{`${pool.increment} %`}</Typography>
        </Box>
      </Box>
      {isDesktop && (
        <>
          <Box className={clsx(styles.card__content__stake)}>
            <Box>
              <Typography
                className={clsx(styles.card__content__deposit, styles.clrFade)}
              >
                {`${pool.depositVal} ${pool.token.symbol}`}
              </Typography>
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__claim)}>
            <Box className="flex  items-center">
              <Typography
                className={clsx(styles.card__content__deposit, styles.clrFade)}
              >
                {`${pool.claimable}`}
              </Typography>
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__extra)}></Box>
        </>
      )}
    </Box>
  );
};

export default React.memo(PoolCardRowClaim);
