import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import clsx from "clsx";
import useResponsive from "../../../../common/hooks/useResponsive";
import InfoContent from "../info-content";
import styles from "./styles.module.scss";

interface Props {}

const InfoCard: FunctionComponent<Props> = () => {
  const isDesktop = useResponsive();
  const userInfoData = [
    { title: "YOUR DEPOSITS", currency: "USD", value: "$0.00" },
    { title: "YOUR REWARDS", currency: "USD", value: "$0.00", isReward: true },
    { title: "xPTP : PTP RATIO", currency: "", value: "0.97" },
  ];
  return (
    <StyledEngineProvider injectFirst>
      <Box className={clsx(styles.card, isDesktop && styles.card__desktop)}>
        {userInfoData.map((ui, idx) => (
          <InfoContent {...ui} key={`ic_${idx}`} />
        ))}
      </Box>
    </StyledEngineProvider>
  );
};

InfoCard.defaultProps = {};

export default React.memo(InfoCard);
