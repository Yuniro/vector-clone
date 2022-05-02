import React, { FunctionComponent } from "react";
import { Box, Button } from "@mui/material";
import UserInfoCard from "../../components/partials/user/info-card";
import PageSection, {
  SectionHeader,
} from "../../components/partials/page/section";
import dummyAirdropPool from "../../common/data/airdropPool";
import PageWrapper from "../../components/partials/page/wrapper";
import PoolsTableHeaderClaim from "../../components/partials/pool/headerClaim";
import Totalclaimable from "../../components/claim/totalclaimable";
import ActivePool from "../../components/partials/pool/activePool";
import AirdropPool from "../../components/partials/pool/airdropPool";
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
          <PoolsTableHeaderClaim />
          <ActivePool pool={activePool} />
          <Totalclaimable />
          <Box className="flex w-full gap-4">
            <Button className="w-full" variant="outlined">
              Claim (<span>0</span>)
            </Button>
            <Button className="w-full" variant="contained">
              Compound (<span>0</span>)
            </Button>
          </Box>
        </PageSection>
        <PageSection>
          <SectionHeader isLarge>Airdrops</SectionHeader>
          <AirdropPool pool={dummyAirdropPool} />
        </PageSection>
      </>
    </PageWrapper>
  );
};

export default Claim;
