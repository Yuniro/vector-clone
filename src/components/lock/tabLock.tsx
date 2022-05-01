import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useResponsive from "../../common/hooks/useResponsive";
import { ReactComponent as WalletIcon } from "../../assets/icons/icon-wallet-2.svg";
import { TabPanel, TabPanelProps } from "../partials/tabs";
import styles from "../partials/pool/styles.module.scss";
import lockTabsStyles from "./styles.module.scss";

export interface ILockRow {
  lockedOn: string;
  locked: string;
  totalValue: string;
  unlocksOn: string;
}
interface Props extends TabPanelProps {
  balance: number;
  lockData: ILockRow[];
}

const TabLock: FunctionComponent<Props> = ({
  value,
  index,
  balance,
  lockData,
}) => {
  const isDesktop = useResponsive();
  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <div>
          <Box className={clsx("flex w-full", styles.stakeInfo)}>
            <Typography
              color="secondary"
              className="text-white font-bold text-base"
            >
              Lock your staked VTX for 16 weeks. Locked VTX will earn boosted
              platform fees and will grant you voting weight for proposal and
              gauge weight voting.
            </Typography>
          </Box>
          <Box
            className={clsx(
              styles.actionSection,
              isDesktop && styles.actionSectionDesktop
            )}
          >
            <Box className="flex flex-1 flex-col">
              <Box className={clsx("flex w-full justify-between mb-2")}>
                <Typography color="secondary">Lock</Typography>
                <Box className={clsx("flex text-white items-center")}>
                  <WalletIcon className="fill-current mr-2" />
                  <Typography color="secondary">{balance}</Typography>
                </Box>
              </Box>
              <FormControl>
                <InputLabel htmlFor="my-input"></InputLabel>
                <OutlinedInput
                  type="number"
                  className="h-12"
                  placeholder="Enter an Amount"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        className={clsx(styles.maxBtn)}
                        variant="contained"
                      >
                        Max
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box className={clsx("flex", "flex-1", "flex-col")}>
              <Box
                className={clsx(
                  "flex",
                  "flex-1",
                  "w-full",
                  "justify-center",
                  "items-center",
                  styles.twoStep
                )}
              >
                <span className={styles.twoStepNumber}>1</span>
                <span className={styles.twoStepLine}></span>
                <span className={styles.twoStepNumber}>2</span>
              </Box>
              <Box
                className={clsx(
                  "flex",
                  "gap-5",
                  "w-full",
                  styles.actionBtn,
                  styles["actionBtn--twoCheck"],
                  isDesktop && styles.actionBtnDesktop
                )}
              >
                <Button className="w-full" variant="contained">
                  Approve
                </Button>
                <Button className="w-full" variant="contained">
                  Lock
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
        <Accordion className={clsx(styles.card__accord, "shadow-none mt-4")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={clsx(styles.card__summary)}
          >
            <Typography className="text-white font-bold text-xl">
              Your Locked VTX
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={"w-full p-0"}>
            <TableContainer className={lockTabsStyles.tableContainer}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="border-0">Locked On</TableCell>
                    <TableCell className="border-0">Locked</TableCell>
                    <TableCell className="border-0">Total Value</TableCell>
                    <TableCell className="border-0">Unlocks On</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lockData.map((row: ILockRow, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.lockedOn}
                      </TableCell>
                      <TableCell>{row.locked}</TableCell>
                      <TableCell>{row.totalValue}</TableCell>
                      <TableCell>{row.unlocksOn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </TabPanel>
    </Box>
  );
};

TabLock.defaultProps = {};

export default React.memo(TabLock);
