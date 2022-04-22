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
import Tabs, { TabPanel } from "../../components/partials/tabs";
import styles from "./styles.module.scss";

interface Props {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const mainPools: ModelPool[] = [
  {
    name: "VTX",
    symbol: "VTX",
    icon: "icon-vtx",
    description: "Stake VTX",
    background: "purple",
    month: "APR",
    increment: 20.8,
    depositVal: 0,
    tvlValue: "$11,174,986",
    claimable: "$0.00",
    stake: {
      title:
        "Stake VTX on Vector to earn a portion of the platform's revenue, distributed as xPTP and zJOE tokens.",
    },
    unstake: true,
    info: [
      {
        title: "VTX Contract",
        id: "0x5817d4f0b62a59b17f75207da1848c2ce75e7af4",
      },
      {
        title: "Staking Contract",
        id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
      },
    ],
  },
  {
    name: "PTP",
    symbol: "xPTP",
    icon: "icon-ptp",
    description: "Convert PTP / Stake xPTP",
    background: "blue-light",
    month: "APR",
    increment: 261.8,
    depositVal: 0,
    tvlValue: "$11,174,986",
    claimable: "$0.00",
    convert: {
      title:
        "Convert PTP to xPTP, then stake xPTP to earn protocol revenue plus VTX tokens",
      description:
        "Important: Converting PTP to xPTP is irreversible. You may stake and unstake xPTP tokens, but not convert them back to PTP via our protocol. Secondary markets exist to allow the exchange of xPTP for PTP (see Trader Joe).",
    },
    stake: {
      title:
        "By staking xPTP, you are earning approximately 66.6% of the Platypus pool's revenue, plus additional VTX tokens on top of that.",
    },
    unstake: true,
    info: [
      {
        title: "PTP Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Converting Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
      {
        title: "xPTP Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
      {
        title: "Staking Contract",
        id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
      },
    ],
  },
];

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
            onChangeIndex={index => setTabIndex(index)}
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
