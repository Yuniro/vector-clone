import React, { FunctionComponent, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import useResponsive from "../../common/hooks/useResponsive";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {}

const Claim: FunctionComponent<Props> = () => {
  const isDesktop = useResponsive();
  const [isNoClaim, setIsNoCalim] = useState(false);

  const path = process.env.PUBLIC_URL;
  return (
    <PageWrapper title="Claim Rewards">
      <>
        <PageSection>
          <UserInfoCard />
        </PageSection>
        {isNoClaim ? (
          <Box
            className={clsx(
              styles.noClaim,
              isDesktop && styles["noClaim--desktop"]
            )}
          >
            <Box
              className={clsx(
                styles.noClaimBox,
                isDesktop && styles["noClaimBox--desktop"]
              )}
            >
              <Box>
                <img
                  alt="icon-no-smiley-shadow"
                  className={styles.noClaimShadow}
                  src={`${path}/assets/icons/icon-no-smiley-shadow.svg`}
                />
                <img
                  alt="icon-no-smiley-box"
                  src={`${path}/assets/icons/icon-no-smiley-box.svg`}
                />
              </Box>
              <Box className={styles.noClaimSmiley}>
                <img
                  alt="icon-no-smiley"
                  src={`${path}/assets/icons/icon-no-smiley.svg`}
                />
              </Box>
            </Box>
            <Box className={clsx(styles.nothingMessage)}>
              <Typography className={styles.noClaimTitle}>
                Nothing to claim... yet!
              </Typography>
              <Box className={styles.noClaimMessage}>
                <InfoIcon className={styles.noClaimMessageIcon} />
                <Typography className={styles.noClaimMessageText}>
                  You don't have anything in the stake pools
                </Typography>
              </Box>
              <Typography className="font-medium">
                Head over to the Stake page and deposit PTP, VTX, stablecoins or
                LP tokens to start earning amazing yield!
              </Typography>
              <Button
                variant="outlined"
                href="/stake"
                className={styles.linkStake}
                color="primary"
                startIcon={<ArrowForwardIcon />}
              >
                Start
                <Typography>Now</Typography>
              </Button>
            </Box>
          </Box>
        ) : (
          <>
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
        )}
      </>
    </PageWrapper>
  );
};

export default Claim;
