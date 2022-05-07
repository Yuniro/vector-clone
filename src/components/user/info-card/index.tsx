import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import clsx from "clsx";
import useResponsive from "../../../common/hooks/useResponsive";
import Content from "./content";
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
      <Box className="flex">
        <Box
          className={clsx(isDesktop ? styles["card--desktop"] : styles.card)}
        >
          {userInfoData.map((ui, idx) => (
            <Content {...ui} key={`ic_${idx}`} />
          ))}
        </Box>
      </Box>
    </StyledEngineProvider>
  );
};

InfoCard.defaultProps = {};

export default React.memo(InfoCard);
