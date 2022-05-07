import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useResponsive from "../../common/hooks/useResponsive";
import dummyAirdropSteps from "../../common/data/airdropSteps";
import { ModelPool, PoolType } from "../../common/models";
import styles from "./styles.module.scss";
import PoolCardRowAirdrop from "./poolCardRowAirdrop";

interface Props {
  pool: ModelPool;
}

const AirdropPool: FunctionComponent<Props> = ({ pool }) => {
  const isDesktop = useResponsive();

  const path = process.env.PUBLIC_URL;

  return (
    <div className={clsx("mb-2.5")}>
      <Card className={clsx(styles.card)} elevation={1}>
        <Accordion className={clsx(styles.card__accord)}>
          <AccordionSummary
            expandIcon={
              <IconButton
                className={styles.cardIcon}
                edge="end"
                aria-label="expand"
                component="span"
              >
                <MoreVertIcon />
              </IconButton>
            }
            className={clsx(
              styles.card__summary,
              styles[`card__summary--bg-${pool.background}`]
            )}
          >
            <PoolCardRowAirdrop pool={pool} />
          </AccordionSummary>
          <AccordionDetails className={"w-full p-0"}>
            <Box className={styles.airdrop}>
              <Box>
                <Typography>
                  If you had vePTP in your wallet on February 20th at 6:00pm
                  UTC, you are eligible for an exclusive VTX airdrop!
                </Typography>
                <Typography>
                  Note: claiming your airdrop early will result in the
                  forfeiting of your remaining, locked airdrop balance. The
                  unlock schedule and bonus distributions are outlined in this
                  Medium article.
                </Typography>
              </Box>

              <Box
                className={clsx(
                  styles.airdropStep,
                  isDesktop && styles["airdropStep--desktop"]
                )}
              >
                {dummyAirdropSteps.map((ads, idx) => {
                  let icon = "icon-lock.svg";
                  const rowClasses = [
                    styles.airdropStepItem,
                    isDesktop && styles["airdropStepItem--desktop"],
                  ];
                  if (idx === 0) {
                    rowClasses.push(styles["airdropStepItem--first"]);
                  }
                  if (!ads.locked && ads.completed) {
                    rowClasses.push(styles["airdropStepItem--unlocked"]);
                    icon = "icon-check.svg";
                  } else if (!ads.locked && !ads.completed) {
                    rowClasses.push(styles["airdropStepItem--unlocked"]);
                    icon = "icon-time.svg";
                  }
                  if (idx + 1 === dummyAirdropSteps.length) {
                    icon = "icon-gift.svg";
                    rowClasses.push(styles["airdropStepItem--last"]);
                  }
                  return (
                    <Box className={clsx(rowClasses)}>
                      <Box className="progressbefore"></Box>
                      <Box className="stepicon">
                        <img
                          alt="airdrop-step-icon"
                          src={`${path}/assets/icons/${icon}`}
                        />
                      </Box>
                      <Box className="progressafter"></Box>
                    </Box>
                  );
                })}
              </Box>
              <Box
                className={clsx(
                  styles.airdropBucket,
                  isDesktop && styles["airdropBucket--desktop"]
                )}
              >
                {dummyAirdropSteps.map((ads, idx) => {
                  const rowClasses = [
                    styles.airdropBucketBox,
                    isDesktop && styles["airdropBucketBox--desktop"],
                  ];
                  if (!ads.locked && ads.completed) {
                    rowClasses.push(styles["airdropBucketBox--unlocked"]);
                  }
                  return (
                    <Box className={clsx(rowClasses)}>
                      <div className="title">
                        {!ads.locked && ads.completed ? "Unlocked" : ads.date}
                      </div>
                      <div className="box">
                        <div className="amount">{`
                        ${ads.value.toFixed(1)}
                        \n
                        ${ads.symbol}`}</div>
                        <div className="value">{`
                        ${ads.currencyVal}
                        \n
                        ${ads.currency}`}</div>
                      </div>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

AirdropPool.defaultProps = {};

export default React.memo(AirdropPool);
