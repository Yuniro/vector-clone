import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useResponsive from "../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

interface Props {}

const TotalCalimable: FunctionComponent<Props> = props => {
  const isDesktop = useResponsive();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {!isDesktop && (
        <Accordion
          expanded={expanded === "panelClaim"}
          onChange={handleChange("panelClaim")}
          className={clsx(styles.dashboardStat)}
        >
          <AccordionSummary
            expandIcon={
              <IconButton edge="end" aria-label="expand" component="span">
                <ExpandMoreIcon />
              </IconButton>
            }
            aria-controls="panelClaimd-content"
            id="panelClaimd-header"
            className={clsx(
              styles.dashboardStatSummary,
              styles["MuiAccordionSummary-content"]
            )}
          >
            <Box
              className={clsx(
                "flex items-center",
                styles.dashboardStatSummaryTitle
              )}
            >
              <Typography className="font-medium">Total Claimable</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={styles.dashboardStatDetails}>
            Hey there
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

TotalCalimable.defaultProps = {};

export default React.memo(TotalCalimable);
