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
import { ModelPoolAlt } from "../../../common/models";
import useResponsive from "../../../common/hooks/useResponsive";
import { ReactComponent as WalletIcon } from "../../../assets/icons/icon-wallet-2.svg";
import { TabPanel, TabPanelProps } from "../tabs";
import styles from "./styles.module.scss";

interface Props extends TabPanelProps {
  pool: ModelPoolAlt;
}

const TabDepositAlt: FunctionComponent<Props> = ({ pool, value, index }) => {
  const isDesktop = useResponsive();
  const path = process.env.PUBLIC_URL;

  return (
    <Box className={clsx("p-4")}>
      <TabPanel value={value} index={index}>
        <Box
          className={clsx(
            styles.actionSection,
            styles["actionSection--alt"],
            isDesktop && styles.actionSectionDesktop
          )}
        >
          <Box
            className={clsx(
              "flex flex-1 flex-col",
              styles["actionSection--altMargin"]
            )}
          >
            <Box
              className={clsx("flex w-full justify-between items-center mb-2")}
            >
              <img
                alt="token-small-img"
                className={styles["actionSection--altImg"]}
                src={`${path}/assets/icons/${pool.primary.token.icon}.svg`}
              />
              <Typography color="secondary">
                Deposit {pool.primary.token.symbol}
              </Typography>
              <Box className={clsx("flex text-white items-center")}>
                <WalletIcon className="fill-current mr-2" />
                <Typography color="secondary">
                  {pool.primary.depositVal}
                </Typography>
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
              styles["actionSection--altMargin"],
              isDesktop && styles.actionBtnDesktop
            )}
          >
            <Button variant="contained">
              approve {pool.primary.token.symbol}
            </Button>
          </Box>
        </Box>

        <Box
          className={clsx(
            styles.actionSection,
            styles["actionSection--alt"],
            isDesktop && styles.actionSectionDesktop
          )}
        >
          <Box
            className={clsx(
              "flex flex-1 flex-col",
              styles["actionSection--altMargin"]
            )}
          >
            <Box
              className={clsx("flex w-full items-center justify-between mb-2")}
            >
              <img
                alt="token-small-img"
                className={styles["actionSection--altImg"]}
                src={`${path}/assets/icons/${pool.secondary.token.icon}.svg`}
              />
              <Typography color="secondary">
                Deposit {pool.secondary.token.symbol}
              </Typography>
              <Box className={clsx("flex text-white items-center")}>
                <WalletIcon className="fill-current mr-2" />
                <Typography color="secondary">
                  {pool.secondary.depositVal}
                </Typography>
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
              styles["actionSection--altMargin"],
              isDesktop && styles.actionBtnDesktop
            )}
          >
            <Button variant="contained">
              approve {pool.secondary.token.symbol}
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};

TabDepositAlt.defaultProps = {};

export default React.memo(TabDepositAlt);
