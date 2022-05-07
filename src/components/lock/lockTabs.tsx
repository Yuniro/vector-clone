import React, { FunctionComponent } from "react";
import SwipeableViews from "react-swipeable-views";
import useResponsive from "../../common/hooks/useResponsive";
import Tabs from "../tabs";
import TabInfo from "../pool/tabInfo";
import TabLock, { ILockRow } from "./tabLock";
import TabUnlock, { IUnlockRow } from "./tabUnlock";

const tabs: string[] = ["Lock", "Unlock", "Info"];

const LockInfo: FunctionComponent = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const isDesktop = useResponsive();
  const info = [
    {
      title: "VTX Contract",
      id: "0x5817d4f0b62a59b17f75207da1848c2ce75e7af4",
    },
    {
      title: "Looking Contract",
      id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
    },
    {
      title: "Depositor Contract",
      id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
    },
  ];
  const lockData: ILockRow[] = [];
  const unlockData: IUnlockRow[] = [];

  return (
    <>
      <Tabs
        tabIndex={tabIndex}
        tabs={tabs}
        variant="fullWidth"
        setTabIndex={setTabIndex}
      />
      <SwipeableViews
        index={tabIndex}
        onChangeIndex={index => setTabIndex(index)}
      >
        <TabLock value={tabIndex} index={0} balance={1} lockData={lockData} />
        <TabUnlock value={tabIndex} index={1} unlockData={unlockData} />
        <TabInfo value={tabIndex} index={2} infos={info} />
      </SwipeableViews>
    </>
  );
};

export default React.memo(LockInfo);
