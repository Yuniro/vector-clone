import React, { FunctionComponent } from "react";
import {
  Box,
  Fade,
  Modal,
  Typography,
  Backdrop,
  Paper,
  IconButton,
  OutlinedInput,
  FormLabel,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SwipeableViews from "react-swipeable-views";
import UserInfoCard from "../../components/user/info-card";
import PageSection, { SectionHeader } from "../../components/page/section";
import PageWrapper from "../../components/page/wrapper";
import dummyMainPools from "../../common/data/mainPools";
import dummyPlaytpusPrimaryPools from "../../common/data/playtpusPrimaryPool";
import dummyPlaytpusAltPools from "../../common/data/playtpusAltPool";
import dummyTraderJoePool from "../../common/data/traderJoePool";
import dummyVectorLpPool from "../../common/data/vectorLpPool";
import ProtocolStats from "../../components/protocol-stats";
import PoolCard from "../../components/pool";
import PoolCardAlt from "../../components/pool/poolCardAlt";
import PoolsTableHeader from "../../components/pool/header";
import Tabs, { TabPanel } from "../../components/tabs";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {}

const Stake: FunctionComponent<Props> = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [openSlippage, setOpenSlippage] = React.useState(false);
  const handleSlippageOpen = () => setOpenSlippage(true);
  const handleSlippageClose = () => setOpenSlippage(false);

  return (
    <PageWrapper title="Stake Funds">
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
              <PoolsTableHeader onGearIconClick={handleSlippageOpen} />
              <Box>
                {dummyPlaytpusPrimaryPools.map((mp, idx) => (
                  <PoolCard pool={mp} key={`pl_${idx}`} />
                ))}
              </Box>
            </PageSection>
            <PageSection>
              <SectionHeader>Alt Pools</SectionHeader>
              <PoolsTableHeader onGearIconClick={handleSlippageOpen} />
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
              <PoolsTableHeader onGearIconClick={handleSlippageOpen} />
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
              <PoolsTableHeader onGearIconClick={handleSlippageOpen} />
              <Box>
                {dummyVectorLpPool.map((mp, idx) => (
                  <PoolCard pool={mp} key={`pl_${idx}`} />
                ))}
              </Box>
            </PageSection>
          </TabPanel>
        </SwipeableViews>
      </PageSection>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSlippage}
        onClose={handleSlippageClose}
        className={styles.modalSlippage}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSlippage}>
          <Paper className={clsx(styles.modalSlippageDialog)}>
            <Box className={clsx("flex gap-2.5", styles.modalSlippageHeader)}>
              <IconButton
                edge="end"
                aria-label="expand"
                component="button"
                onClick={handleSlippageClose}
                className={styles.modalSlippageClose}
              >
                <CancelIcon />
              </IconButton>
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h4"
              >
                Slippage Settings
              </Typography>
            </Box>

            <Box className={styles.modalSlippageBody}>
              <Box className={styles.modalSlippageTitle}>
                <Typography variant="body1" component="p">
                  This slippage setting is required for withdrawing your
                  stablecoins. If the price moves by more than the slippage
                  amount entered, the transaction will fail. The default
                  slippage is 1.0%, which is the same as the Platypus default
                  setting.
                </Typography>
              </Box>
              <Box className={styles.modalSlippageForm}>
                <FormLabel htmlFor="slippage-input">
                  <Typography variant="body1" component="p">
                    Slippage
                  </Typography>
                </FormLabel>
                <OutlinedInput
                  type="number"
                  id="slippage-input"
                  className="h-12"
                  defaultValue={1}
                  endAdornment={<p>%</p>}
                />
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </PageWrapper>
  );
};

export default Stake;
