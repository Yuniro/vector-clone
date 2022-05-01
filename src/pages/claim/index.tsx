import React, { FunctionComponent } from "react";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection, {
  SectionHeader,
} from "../../components/partials/page/section";
import PageWrapper from "../../components/partials/page/wrapper";
import PoolsTableHeader from "../../components/claim/header";
import Totalclaimable from "../../components/claim/totalclaimable";
import ActivePool from "../../components/partials/pool/activePool";
import activePool from "../../common/data/activePool";

interface Props {}

const Claim: FunctionComponent<Props> = () => {
  return (
    <PageWrapper title="Claim Rewards">
      <>
        <PageSection>
          <UserInfoCard />
        </PageSection>
        <PageSection>
          <SectionHeader isLarge>Your Active pools</SectionHeader>
          <PoolsTableHeader />
          <ActivePool pool={activePool} />
          <Totalclaimable />
        </PageSection>
        <PageSection>
          <SectionHeader isLarge>Airdrops</SectionHeader>
        </PageSection>
      </>
    </PageWrapper>
  );
};

export default Claim;
