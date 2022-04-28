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
import { ModelPool } from "../../../common/models";
import useResponsive from "../../../common/hooks/useResponsive";
import { ReactComponent as WalletIcon } from "../../../assets/icons/icon-wallet-2.svg";
import { TabPanel, TabPanelProps } from "../tabs";
import styles from "./styles.module.scss";

interface Props extends TabPanelProps {
  pool: ModelPool;
}

const TabUnstake: FunctionComponent<Props> = ({ pool, value, index }) => {
  const isDesktop = useResponsive();
  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <Box
          className={clsx(
            styles.actionSection,
            isDesktop && styles.actionSectionDesktop
          )}
        >
          <Box className="flex flex-1 flex-col">
            <Box className={clsx("flex w-full justify-between mb-2")}>
              <Typography color="secondary">
                Unstake {pool.token.symbol}
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
          <Box
            className={clsx(
              "flex",
              "flex-1",
              styles.actionBtn,
              isDesktop && styles.actionBtnDesktop
            )}
          >
            <Button variant="contained">unstake</Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};

TabUnstake.defaultProps = {};

export default React.memo(TabUnstake);
