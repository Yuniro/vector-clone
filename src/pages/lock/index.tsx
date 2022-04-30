import { FunctionComponent } from "react";
import { Paper } from "@mui/material";
import clsx from "clsx";
import PageWrapper from "../../components/partials/page/wrapper";
import InfoHeader from "../../components/lock/lockInfo";
import LockTabs from "../../components/lock/lockTabs";
import styles from "./styles.module.scss";

interface Props {}

const Lock: FunctionComponent<Props> = () => {
  return (
    <PageWrapper title="Lock VTX">
      <Paper
        elevation={1}
        className={clsx(styles.container, "overflow-hidden")}
      >
        <InfoHeader
          increment={81}
          lockedValue={0}
          tvlValue={600755}
          claimable={0}
        />
        <LockTabs />
      </Paper>
    </PageWrapper>
  );
};

export default Lock;
