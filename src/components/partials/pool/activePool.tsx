import clsx from "clsx";
import React, { FunctionComponent } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import useResponsive from "../../../common/hooks/useResponsive";
import { ModelPool } from "../../../common/models";
import PoolCardRowClaim from "./poolCardRowClaim";
import styles from "./styles.module.scss";

interface Props {
  pool: ModelPool;
}

const ActivePool: FunctionComponent<Props> = ({ pool }) => {
  const isDesktop = useResponsive();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const path = process.env.PUBLIC_URL;

  return (
    <Card className={clsx(styles.card, "mb-2.5")} elevation={1}>
      <Accordion className={clsx(styles.card__accord)}>
        <AccordionSummary
          expandIcon={
            <IconButton
              className={styles.cardIcon}
              edge="end"
              aria-label="expand"
              component="span"
            >
              <MoreVertIcon />
            </IconButton>
          }
          className={clsx(
            styles.card__summary,
            styles[`card__summary--bg-${pool.background}`]
          )}
        >
          <PoolCardRowClaim pool={pool} />
        </AccordionSummary>
        <AccordionDetails className={"w-full p-0"}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Earnings</TableCell>
                  <TableCell>Token Price</TableCell>
                  <TableCell>Total Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pool.earnings?.map((row, idx) => (
                  <TableRow key={`pe_${idx}`}>
                    <TableCell component="th" scope="row">
                      <Box>
                        <img
                          alt="token-img"
                          src={`${path}/assets/icons/${row.token.icon}.svg`}
                        />
                        {`${row.earning.toFixed(2)} ${row.token.name}`}
                      </Box>
                    </TableCell>
                    <TableCell>{`1 ${row.token.symbol} = $${row.price}`}</TableCell>
                    <TableCell>{`$${row.total.toFixed(2)}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

ActivePool.defaultProps = {};

export default React.memo(ActivePool);
