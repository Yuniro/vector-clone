import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Box, Typography, IconButton, Popover } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

interface Props {
  popoverAprMessage?: string;
  popoverTvlMessage?: string;
  onGearIconClick?: () => void;
}

const PoolsTableHeader: FunctionComponent<Props> = ({
  popoverAprMessage,
  popoverTvlMessage,
  onGearIconClick,
}) => {
  const isDesktop = useResponsive();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openApr = Boolean(
    anchorEl && anchorEl.getAttribute("id") === "header-apr-popover"
  );

  const openTvl = Boolean(
    anchorEl && anchorEl.getAttribute("id") === "header-tvl-popover"
  );

  return (
    <Box className={clsx("items-center", isDesktop ? "flex" : "hidden")}>
      <Box
        className={clsx(styles.poolsTableHeader, "flex items-center w-full")}
      >
        <Box className={styles.card__content__infoDesktop}>
          <Typography className={styles.headerText}>Pool Name</Typography>
        </Box>
        <Box
          className={clsx(
            styles.card__content__change,
            "!flex-row items-center"
          )}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          id="header-apr-popover"
        >
          <Typography className={styles.headerText}>APR</Typography>
          <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
        </Box>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={openApr}
          anchorEl={anchorEl}
          className={styles.popover}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{popoverAprMessage}</Typography>
        </Popover>
        <Box className={clsx(styles.card__content__stake)}>
          <Typography className={styles.headerText}>Your deposites</Typography>
        </Box>
        <Box
          className={clsx(
            styles.card__content__claim,
            "!flex-row items-center"
          )}
          id="header-tvl-popover"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography className={styles.headerText}>TVL</Typography>
          <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
        </Box>
        <Popover
          id="mouse-over-popover-tvl"
          sx={{
            pointerEvents: "none",
          }}
          className={styles.popover}
          open={openTvl}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{popoverTvlMessage}</Typography>
        </Popover>
        <Box className={styles.card__content__claim}>
          <Typography className={styles.headerText}>Claimable</Typography>
        </Box>
        <Box
          className={clsx(styles.card__content__extra, "flex justify-end")}
        ></Box>
        <IconButton className={styles.cardIcon} onClick={onGearIconClick}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

PoolsTableHeader.defaultProps = {
  popoverAprMessage: "The APR comes from PTP APR as well as bonus VTX rewards.",
  popoverTvlMessage:
    "Total Value Locked: the total value that this pool has deposited into it.",
};

export default React.memo(PoolsTableHeader);
