import React, { FunctionComponent } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection from "../../components/partials/page/section";
import PageTitle from "../../components/partials/page/title";
import ProtocolStats from "../../components/partials/protocol-stats";
import styles from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Stake: FunctionComponent<Props> = () => {
  return (
    <div className="w-full">
      <StyledEngineProvider injectFirst>
        <PageTitle>Stake Funds</PageTitle>

        <PageSection>
          <>
            <UserInfoCard />
            <ProtocolStats />
          </>
        </PageSection>
      </StyledEngineProvider>
    </div>
  );
};

export default Stake;
