import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SwipeableViews from "react-swipeable-views";
import useResponsive from "../../common/hooks/useResponsive";
import { ModelPoolAlt } from "../../common/models";
import styles from "./styles.module.scss";
import Tabs from "../tabs";
import TabInfo from "./tabInfo";
import PoolCardRow from "./poolCardRow";
import TabDepositAlt from "./tabDepositAlt";
import TabWithdrawAlt from "./tabWithdrawAlt";

interface Props {
  pool: ModelPoolAlt;
  isPrimary?: boolean;
}

const PoolCardAlt: FunctionComponent<Props> = ({ pool, isPrimary }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const isDesktop = useResponsive();
  const tabs = [];
  pool.primary.convert && tabs.push("convert");
  pool.primary.stake && tabs.push("stake");
  pool.primary.unstake && tabs.push("unstake");
  pool.primary.deposit && tabs.push("deposit");
  pool.primary.withdraw && tabs.push("withdraw");
  pool.primary.info && tabs.push("info");

  const path = process.env.PUBLIC_URL;
  const primaryInfo = pool.primary.info ? pool.primary.info : [];
  const secondaryInfo = pool.secondary.info ? pool.secondary.info : [];
  const infos = [...primaryInfo, ...secondaryInfo];

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
            <Box className={clsx("flex flex-col flex-1")}>
              <PoolCardRow pool={pool.primary} />
              <Box
                className={clsx(
                  styles.card__summaryDivide,
                  isDesktop && styles["card__summaryDivide--desktop"]
                )}
              ></Box>
              <PoolCardRow pool={pool.secondary} />
            </Box>
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
                  case "deposit":
                    return (
                      <TabDepositAlt
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );
                  case "withdraw":
                    return (
                      <TabWithdrawAlt
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        pool={pool}
                      />
                    );
                  case "info":
                    return (
                      <TabInfo
                        key={`k_tab_${idx}`}
                        value={tabIndex}
                        index={idx}
                        infos={infos}
                      />
                    );
                  default:
                    break;
                }
              })}
            </SwipeableViews>
          </AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

PoolCardAlt.defaultProps = {
  isPrimary: false,
};

export default React.memo(PoolCardAlt);
