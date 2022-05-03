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

  const path = process.env.PUBLIC_URL;

  return (
    <>
      <Accordion
        expanded={expanded === "panelClaim"}
        onChange={handleChange("panelClaim")}
      >
        <AccordionSummary
          expandIcon={
            <IconButton edge="end" aria-label="expand" component="span">
              <ExpandMoreIcon />
            </IconButton>
          }
          aria-controls="panelClaimd-content"
          id="panelClaimd-header"
        >
          <Box className={clsx("flex items-center")}>
            <Typography className="font-medium">Total Claimable</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails className={styles.claimableDetails}>
          <Box className="flex items-center">
            <Box className="flex items-center mr-4">
              <img
                alt="op-step-icon"
                className="m-2.5 h-5"
                src={`${path}/assets/icons/icon-vtx.svg`}
              />
              <Typography className="text">Total claimable VTX</Typography>
            </Box>
            <Box className="dashed"></Box>
            <Box className="flex items-center pr-4 ">
              <Typography className="convert-text">0.00 VTX</Typography>
              <Typography color="secondary" className="text">
                $0.00
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center">
            <Box className="flex items-center mr-4">
              <img
                alt="op-step-icon"
                className="m-2.5 h-5"
                src={`${path}/assets/icons/icon-ptp.svg`}
              />
              <Typography className="text">Total claimable PTP</Typography>
            </Box>
            <Box className="dashed"></Box>
            <Box className="flex items-center pr-4 ">
              <Typography className="convert-text">0.00 PTP</Typography>
              <Typography color="secondary" className="text">
                $0.00
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

TotalCalimable.defaultProps = {};

export default React.memo(TotalCalimable);
