import React, { FunctionComponent } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection, {
  SectionHeader,
} from "../../components/partials/page/section";
import PageTitle from "../../components/partials/page/title";
import ModelPool from "../../common/models/pool";
import ProtocolStats from "../../components/partials/protocol-stats";
import PoolCard from "../../components/partials/pool";
import styles from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Stake: FunctionComponent<Props> = () => {
  const mainPools: ModelPool[] = [
    {
      name: "PTP",
      icon: "icon-ptp",
      description: "Convert PTP / Stake xPTP",
      background: "blue-light",
      increment: 261.8,
      deposit: 0,
      tvlValue: "$11,174,986",
      claimable: "$0.00",
    },
    {
      name: "VTX",
      icon: "icon-vtx",
      description: "Stake VTX",
      background: "purple",
      increment: 20.8,
      deposit: 0,
      tvlValue: "$11,174,986",
      claimable: "$0.00",
    },
  ];

  return (
    <div className="w-full">
      <StyledEngineProvider injectFirst>
        <PageTitle>Stake Funds</PageTitle>

        <PageSection>
          <UserInfoCard />
          <ProtocolStats />
        </PageSection>
        <PageSection>
          <SectionHeader>Main pools</SectionHeader>
          <>
            {mainPools.map((mp, idx) => (
              <PoolCard pool={mp} key={`pl_${idx}`} />
            ))}
          </>
        </PageSection>
      </StyledEngineProvider>
    </div>
  );
};

export default Stake;
