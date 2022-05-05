import { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
import clsx from "clsx";
import {
  Box,
  Button,
  SvgIcon,
  Typography,
  Popper,
  Paper,
  Divider,
  Link,
  Slide,
} from "@mui/material";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as CaretDownIcon } from "../../assets/icons/caret-down.svg";
import { ReactComponent as ConnectWalletIcon } from "../../assets/icons/connect-wallet.svg";
import { useWeb3Context } from "../../common/hooks";
import useResponsive from "../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

function ConnectMenu() {
  const { connect, disconnect, connected, web3, chainID } = useWeb3Context();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isConnected, setConnected] = useState(connected);
  const [isHovering, setIsHovering] = useState(false);
  const isDesktop = useResponsive();

  const pendingTransactions: any = [];
  // const pendingTransactions = useSelector((state) => {
  //   //@ts-ignore
  //   return state.pendingTransactions;
  // });

  let buttonText = "Connect Wallet";
  let clickFunc: any = connect;

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (isConnected) {
    buttonText = "Walet";
    clickFunc = disconnect;
  }

  if (pendingTransactions && pendingTransactions.length > 0) {
    buttonText = "In progress";
    clickFunc = handleClick;
  }

  const open = Boolean(anchorEl);
  const id = open ? "ohm-popper-pending" : undefined;

  const primaryColor = "#31CB9E";
  const getEtherscanUrl = (txnHash: string) => {
    return chainID === 4
      ? "https://rinkeby.etherscan.io/tx/" + txnHash
      : "https://polygonscan.com/tx/" + txnHash;
  };

  useEffect(() => {
    if (pendingTransactions.length === 0) {
      setAnchorEl(null);
    }
  }, [pendingTransactions]);

  useEffect(() => {
    setConnected(connected);
  }, [web3, connected]);

  return (
    <div>
      <Button
        id="wallet-menu"
        className={clsx(
          styles.buttonConnect,
          !isDesktop && styles.buttonConnect__mobile,
          "text-white"
        )}
        onClick={clickFunc}
        startIcon={<ConnectWalletIcon className="fill-current" />}
      >
        {isDesktop && <p>{buttonText}</p>}
        {pendingTransactions.length > 0 && (
          <Slide direction="left" in={isHovering} {...{ timeout: 333 }}>
            <SvgIcon
              className="caret-down"
              component={CaretDownIcon}
              htmlColor={primaryColor}
            />
          </Slide>
        )}
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <Paper className="ohm-menu" elevation={1}>
          {pendingTransactions.map((x: any) => (
            <Link
              key={x.txnHash}
              href={getEtherscanUrl(x.txnHash)}
              color="primary"
              target="_blank"
              rel="noreferrer"
            >
              <div className="pending-txn-container">
                <Typography style={{ color: primaryColor }}>
                  {x.text}
                </Typography>
                <SvgIcon component={ArrowUpIcon} htmlColor={primaryColor} />
              </div>
            </Link>
          ))}
          <Box className="add-tokens">
            <Divider color="secondary" />
            <Button
              variant="text"
              color="secondary"
              onClick={disconnect}
              style={{ marginBottom: "0px" }}
            >
              <Typography>Disconnect</Typography>
            </Button>
          </Box>
        </Paper>
      </Popper>
    </div>
  );
}

export default ConnectMenu;
