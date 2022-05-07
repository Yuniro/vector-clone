import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Box,
  Link,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { ModelPool } from "../../common/models";
import useResponsive from "../../common/hooks/useResponsive";
import { ReactComponent as WalletIcon } from "../../assets/icons/icon-wallet-2.svg";
import { TabPanel, TabPanelProps } from "../tabs";
import styles from "./styles.module.scss";

interface Props extends TabPanelProps {
  pool: ModelPool;
}

const TabConvert: FunctionComponent<Props> = ({ pool, value, index }) => {
  const isDesktop = useResponsive();
  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <Box className={clsx("flex flex-col w-full", styles.stakeInfo)}>
          <Typography className="text-white font-bold text-base leading-5 pb-2.5">
            {pool.convert?.title}
          </Typography>
          <Typography color="secondary" className="text-sm leading-5">
            {pool.convert?.description}
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
              <Typography color="secondary">
                Stake {pool.token.symbol}
              </Typography>
              <Box className={clsx("flex text-white items-center")}>
                <WalletIcon className="fill-current mr-2" />
                <Typography color="secondary">{pool.depositVal}</Typography>
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
                    <Button className={clsx(styles.maxBtn)} variant="contained">
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
                Convert
              </Button>
            </Box>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};

TabConvert.defaultProps = {};

export default React.memo(TabConvert);
