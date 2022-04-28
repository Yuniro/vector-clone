import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection, {
  SectionHeader,
} from "../../components/partials/page/section";
import PageWrapper from "../../components/partials/page/wrapper";
import dummyMainPools from "../../common/data/mainPools";
import dummyPlaytpusPrimaryPools from "../../common/data/playtpusPrimaryPool";
import dummyPlaytpusAltPools from "../../common/data/playtpusAltPool";
import dummyTraderJoePool from "../../common/data/traderJoePool";
import dummyVectorLpPool from "../../common/data/vectorLpPool";
import ProtocolStats from "../../components/partials/protocol-stats";
import PoolCard from "../../components/partials/pool";
import PoolCardAlt from "../../components/partials/pool/poolCardAlt";
import PoolsTableHeader from "../../components/partials/pool/header";
import Tabs, { TabPanel } from "../../components/partials/tabs";
import styles from "./styles.module.scss";

interface Props {}

const Stake: FunctionComponent<Props> = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <PageWrapper title="Stake Funds">
      <>
        <PageSection>
          <UserInfoCard />
          <ProtocolStats />
        </PageSection>
        <PageSection>
          <SectionHeader>Main pools</SectionHeader>
          <Box className="pt-4">
            {dummyMainPools.map((mp, idx) => (
              <PoolCard pool={mp} key={`pl_${idx}`} />
            ))}
          </Box>
        </PageSection>
        <PageSection>
          <Tabs
            tabIndex={tabIndex}
            tabs={["Platypus Pools", "Trader Joe Pools", "Vector LP Pools"]}
            setTabIndex={setTabIndex}
          ></Tabs>
          <SwipeableViews
            index={tabIndex}
            onChangeIndex={index => setTabIndex(index)}
          >
            <TabPanel value={tabIndex} index={0}>
              <PageSection>
                <SectionHeader />
                <PoolsTableHeader />
                <Box>
                  {dummyPlaytpusPrimaryPools.map((mp, idx) => (
                    <PoolCard pool={mp} key={`pl_${idx}`} />
                  ))}
                </Box>
              </PageSection>
              <PageSection>
                <SectionHeader>Alt Pools</SectionHeader>
                <PoolsTableHeader />
                <Box>
                  {dummyPlaytpusAltPools.map((mp, idx) => (
                    <PoolCardAlt pool={mp} key={`pl_${idx}`} />
                  ))}
                </Box>
              </PageSection>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <PageSection>
                <SectionHeader />
                <PoolsTableHeader />
                <Box>
                  {dummyTraderJoePool.map((mp, idx) => (
                    <PoolCard pool={mp} key={`pl_${idx}`} />
                  ))}
                </Box>
              </PageSection>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <PageSection>
                <SectionHeader />
                <PoolsTableHeader />
                <Box>
                  {dummyVectorLpPool.map((mp, idx) => (
                    <PoolCard pool={mp} key={`pl_${idx}`} />
                  ))}
                </Box>
              </PageSection>
            </TabPanel>
          </SwipeableViews>
        </PageSection>
      </>
    </PageWrapper>
  );
};

export default Stake;
