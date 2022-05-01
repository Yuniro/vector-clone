import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useResponsive from "../../common/hooks/useResponsive";
import { TabPanel, TabPanelProps } from "../partials/tabs";
import styles from "../partials/pool/styles.module.scss";
import lockTabsStyles from "./styles.module.scss";

export interface IUnlockRow {
  lockedDate: string;
  locked: string;
  totalValue: string;
  unlockedOn: string;
  amountToUnlock: string;
}
interface Props extends TabPanelProps {
  unlockData: IUnlockRow[];
}

const TabUnlock: FunctionComponent<Props> = ({ value, index, unlockData }) => {
  const isDesktop = useResponsive();
  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <Box className={clsx("w-full pb-8")}>
          <Typography className="text-white font-bold text-base pb-2.5">
            You can select and claim your unlocked VTX below. This will be sent
            to your wallet and can be staked or locked again.
          </Typography>
          <Typography className="text-white text-sm">
            Note: You can choose to leave your VTX locked and you will continue
            to earn higher rewards.
          </Typography>
        </Box>
        <TableContainer className={lockTabsStyles.tableContainer}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="border-0">Locked Date</TableCell>
                <TableCell className="border-0">Locked</TableCell>
                <TableCell className="border-0">Total Value</TableCell>
                <TableCell className="border-0">Unlocked On</TableCell>
                <TableCell className="border-0">Amount To Unlock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unlockData.map((row: IUnlockRow, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.lockedDate}
                  </TableCell>
                  <TableCell>{row.locked}</TableCell>
                  <TableCell>{row.totalValue}</TableCell>
                  <TableCell>{row.unlockedOn}</TableCell>
                  <TableCell>{row.amountToUnlock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <Button className="w-full" variant="contained" disabled>
        Unlock My VTX
      </Button>
    </Box>
  );
};

TabUnlock.defaultProps = {};

export default React.memo(TabUnlock);
