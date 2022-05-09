import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Box,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../common/hooks/useResponsive";
import { ModelPool, PoolType } from "../../common/models";
import styles from "./styles.module.scss";

interface Props {
  pool: ModelPool;
}

const PoolCardRow: FunctionComponent<Props> = ({ pool }) => {
  const isDesktop = useResponsive();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openIncPopover = Boolean(anchorEl);
  const path = process.env.PUBLIC_URL;

  return (
    <Box className={clsx("w-full flex items-center", styles.card__content)}>
      <Box
        className={clsx(
          "flex justify-start",
          styles.card__content__info,
          isDesktop && styles.card__content__infoDesktop
        )}
      >
        <img
          alt="token-img"
          className={clsx(
            pool.type === PoolType.PRIMARY
              ? styles["card__contentIcon--primary"]
              : styles.card__contentIcon,
            isDesktop &&
              (pool.type === PoolType.PRIMARY
                ? styles["card__contentIcon--primaryDesktop"]
                : styles.card__contentIconDesktop)
          )}
          src={`${path}/assets/icons/${pool.token.icon}.svg`}
        />
        <Box
          className={clsx(
            "flex flex-col flex-wrap justify-center",
            styles.card__content__infoName
          )}
        >
          <Typography className={styles.card__content__name}>
            {pool.token.name}
            {pool.isBoosted && (
              <span className={styles.card__content__nameBoosted}>boosted</span>
            )}
          </Typography>
          {pool.description && (
            <Typography className={styles.card__content__desc}>
              {pool.description}
            </Typography>
          )}

          <Typography className={styles.card__content__deposit}>
            {`${pool.depositVal} ${pool.token.symbol}`}
          </Typography>
        </Box>
      </Box>
      <Box className={clsx(styles.card__content__change)}>
        {pool.type === PoolType.PRIMARY && (
          <Typography className={clsx(styles.headerText)}>
            {pool.month}
          </Typography>
        )}
        <Box
          className="flex items-center"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <Typography
            className={clsx(styles.headerText, styles["headerText--increment"])}
          >{`${pool.increment} %`}</Typography>
          <InfoIcon className={clsx(styles.icon, styles.clrFade)} />

          <Popover
            sx={{
              pointerEvents: "none",
            }}
            open={openIncPopover}
            anchorEl={anchorEl}
            className={styles.popoverTable}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            disableRestoreFocus
          >
            <TableContainer className={styles.activeTable}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.activeTableHeader}>
                      Source
                    </TableCell>
                    <TableCell className={styles.activeTableHeader}>
                      APR
                    </TableCell>
                    <TableCell className={styles.activeTableHeader}>
                      APY <small>(if compounded weekly)</small>
                    </TableCell>
                    <TableCell className={styles.activeTableHeader}>
                      APY <small>(if compounded daily)</small>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(pool.source || []).map((row, idx) => (
                    <TableRow key={`pe_${idx}`}>
                      <TableCell scope="row" className={styles.activeTableCell}>
                        <Box className="flex items-center">
                          <img
                            alt="token-img"
                            src={`${path}/assets/icons/${row.token.icon}.svg`}
                          />
                          {row.token.name}
                        </Box>
                      </TableCell>
                      <TableCell
                        className={styles.activeTableCell}
                      >{`${row.apr}%`}</TableCell>
                      <TableCell
                        className={styles.activeTableCell}
                      >{`${row.apyWeekly}%`}</TableCell>
                      <TableCell
                        className={styles.activeTableCell}
                      >{`${row.apyDaily}%`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Popover>
        </Box>
      </Box>
      {isDesktop && (
        <>
          <Box className={clsx(styles.card__content__stake)}>
            {pool.type === PoolType.PRIMARY && (
              <Typography className={clsx(styles.headerText)}>
                Staked {`${pool.token.symbol}`}
              </Typography>
            )}
            <Box>
              <Typography
                className={clsx(styles.card__content__deposit, styles.clrFade)}
              >
                {`${pool.depositVal} ${pool.token.symbol}`}
              </Typography>
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__claim)}>
            {pool.type === PoolType.PRIMARY && (
              <Typography className={clsx(styles.headerText)}>TVL</Typography>
            )}
            <Box>
              <Typography className={styles.card__content__deposit}>
                {`${pool.tvlValue}`}
              </Typography>
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__claim)}>
            {pool.type === PoolType.PRIMARY && (
              <Typography className={clsx(styles.headerText)}>
                Claimable
              </Typography>
            )}
            <Box className="flex  items-center">
              <Typography
                className={clsx(styles.card__content__deposit, styles.clrFade)}
              >
                {`${pool.claimable}`}
              </Typography>
              <InfoIcon className={clsx(styles.icon, styles.clrFade)} />
            </Box>
          </Box>
          <Box className={clsx(styles.card__content__extra)}></Box>
        </>
      )}
    </Box>
  );
};

export default React.memo(PoolCardRow);
