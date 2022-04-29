import React, { FunctionComponent } from "react";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection from "../../components/partials/page/section";
import PageWrapper from "../../components/partials/page/wrapper";

interface Props {}

const Claim: FunctionComponent<Props> = () => {
  return (
    <PageWrapper title="Claim Rewards">
      <>
        <PageSection>
          <UserInfoCard />
        </PageSection>
      </>
    </PageWrapper>
  );
};

export default Claim;
