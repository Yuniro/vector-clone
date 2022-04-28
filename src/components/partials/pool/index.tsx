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
import InfoIcon from "@mui/icons-material/Info";
import SwipeableViews from "react-swipeable-views";
import useResponsive from "../../../common/hooks/useResponsive";
import { ModelPool, PoolType } from "../../../common/models";
import styles from "./styles.module.scss";
import Svg from "../Svg";
import Tabs from "../tabs";
import TabInfo from "./tabInfo";
import TabUnstake from "./tabUnstake";
import TabStake from "./tabStake";
import TabConvert from "./tabConvert";
import TabWithdraw from "./tabWithdraw";
import TabDeposit from "./tabDeposit";
import PoolCardRow from "./poolCardRow";

interface Props {
  pool: ModelPool;
  isPrimary?: boolean;
}

const PoolCard: FunctionComponent<Props> = ({ pool, isPrimary }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const isDesktop = useResponsive();
  const tabs = [];
  pool.convert && tabs.push("convert");
  pool.stake && tabs.push("stake");
  pool.unstake && tabs.push("unstake");
  pool.deposit && tabs.push("deposit");
  pool.withdraw && tabs.push("withdraw");
  pool.info && tabs.push("info");

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
            <PoolCardRow pool={pool} />
          </AccordionSummary>
          <AccordionDetails className={"w-full p-0"}>
            <Tabs
              tabIndex={tabIndex}
              tabs={tabs}
              variant="fullWidth"
              setTabIndex={setTabIndex}
            />
            <SwipeableViews
              index={tabIndex}
              onChangeIndex={index => setTabIndex(index)}
            >
              {tabs.map((tab, idx) => {
                switch (tab) {
                  case "info":
                    return (
                      <TabInfo
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        infos={pool.info}
                      />
                    );
                  case "stake":
                    return (
                      <TabStake
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );
                  case "unstake":
                    return (
                      <TabUnstake
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );
                  case "convert":
                    return (
                      <TabConvert
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );
                  case "deposit":
                    return (
                      <TabDeposit
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );
                  case "withdraw":
                    return (
                      <TabWithdraw
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );

                  default:
                    break;
                }
              })}
            </SwipeableViews>
            {!isDesktop && (
              <Box className={styles.earning}>
                <Typography
                  className={clsx(styles.headerText, styles.headerTextEarning)}
                >
                  Earnings
                </Typography>

                <Box className="flex  items-center">
                  <Typography
                    className={clsx(
                      styles.card__content__deposit,
                      styles.clrFade
                    )}
                  >
                    {`${pool.claimable}`}
                  </Typography>
                  <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
                </Box>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

PoolCard.defaultProps = {
  isPrimary: false,
};

export default React.memo(PoolCard);
