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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../common/hooks/useResponsive";
import styles from "./styles.module.scss";
import Stats from "./stats";

interface Props {}

const ProtocolStats: FunctionComponent<Props> = props => {
  const isDesktop = useResponsive();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {isDesktop ? (
        <Card className={clsx("text-center", styles.statCard)} elevation={1}>
          <Stats isDesktop={isDesktop} />
        </Card>
      ) : (
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={clsx(styles.stat)}
        >
          <AccordionSummary
            expandIcon={
              <IconButton edge="end" aria-label="expand" component="span">
                <ExpandMoreIcon />
              </IconButton>
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
            className={clsx(
              styles.statSummary,
              styles["MuiAccordionSummary-content"]
            )}
          >
            <Box className={clsx("flex items-center", styles.statSummaryTitle)}>
              <InfoIcon />
              <Typography className="font-medium">
                VECTOR PROTOCOL STATS
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={styles.statDetails}>
            <Stats isDesktop={isDesktop} />
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

ProtocolStats.defaultProps = {};

export default React.memo(ProtocolStats);
