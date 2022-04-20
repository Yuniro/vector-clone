import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Card,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useResponsive from "../../../common/hooks/useResponsive";
import {ModelPool} from "../../../common/models";
import styles from "./styles.module.scss";
import Stats from "./stats";
import Svg from "../Svg";
import { style } from "@mui/system";

interface Props {
  pool: ModelPool;
  isPrimary?: boolean;
}

const PoolCard: FunctionComponent<Props> = ({ pool, isPrimary }) => {
  return (
    <div className={clsx("mb-2.5")}>
      <Card className={clsx("text-center", styles.card)} elevation={1}>
        <Accordion className={clsx(styles.card__accord)}>
          <AccordionSummary
            expandIcon={<MoreVertIcon />}
            className={clsx(
              styles.card__summary,
              styles[`card__summary--bg-${pool.background}`]
            )}
          >
            <Box
              className={clsx("w-full flex items-center", styles.card__content)}
            >
              <Box
                className={clsx(
                  "flex itemx-center justify-start",
                  styles.card__content__info
                )}
              >
                <Svg type={pool.icon ? pool.icon : "icon-ptp"} />
                <Box>
                  <Typography className={styles.card__content__name}>
                    {pool.name}
                  </Typography>
                </Box>
              </Box>
              <Box className={clsx(styles.card__content__value)}></Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            className={styles.dashboardStatDetails}
          ></AccordionDetails>
        </Accordion>
      </Card>
    </div>
  );
};

PoolCard.defaultProps = {
  isPrimary: false,
};

export default React.memo(PoolCard);
