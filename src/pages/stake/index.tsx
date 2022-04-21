import React, { FunctionComponent } from "react";
import SwipeableViews from "react-swipeable-views";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection, {
  SectionHeader,
} from "../../components/partials/page/section";
import PageWrapper from "../../components/partials/page/wrapper";
import { ModelPool } from "../../common/models";
import ProtocolStats from "../../components/partials/protocol-stats";
import PoolCard from "../../components/partials/pool";
import Tabs from "../../components/partials/tabs";
import styles from "./styles.module.scss";

interface Props {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
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

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && children}
    </div>
  );
}

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
          <>
            {mainPools.map((mp, idx) => (
              <PoolCard pool={mp} key={`pl_${idx}`} />
            ))}
          </>
        </PageSection>
        <PageSection>
          <Tabs
            tabIndex={tabIndex}
            tabs={["Platypus Pools", "Trader Joe Pools", "Vector LP Pools"]}
            setTabIndex={setTabIndex}
          ></Tabs>
          <SwipeableViews
            index={tabIndex}
            onChangeIndex={(index) => setTabIndex(index)}
          >
            <TabPanel value={tabIndex} index={0}>
              a
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              b
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              c
            </TabPanel>
          </SwipeableViews>
        </PageSection>
      </>
    </PageWrapper>
  );
};

export default Stake;
