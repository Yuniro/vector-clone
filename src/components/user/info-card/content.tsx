import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import useResponsive from "../../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

interface Props {
  isReward?: boolean;
  title: string;
  currency?: string;
  value: string;
}

const Content: FunctionComponent<Props> = ({
  isReward,
  title,
  currency,
  value,
}) => {
  const isDesktop = useResponsive();
  return (
    <StyledEngineProvider injectFirst>
      <Card className={clsx("text-center", styles.info)} elevation={1}>
        <CardContent className={clsx(styles.info__content)}>
          <Typography
            className={clsx(
              isDesktop ? styles["info__header--desktop"] : styles.info__header
            )}
          >
            {title}
          </Typography>
          <Typography
            className={clsx(
              "font-bold",
              isDesktop ? styles["info__value--desktop"] : styles.info__value,
              isReward && styles["info__value--reward"]
            )}
          >
            {value}{" "}
            {currency && (
              <span
                className={clsx(
                  isDesktop
                    ? styles["info__currency--desktop"]
                    : styles.info__currency
                )}
              >
                {currency}
              </span>
            )}
          </Typography>
        </CardContent>
      </Card>
    </StyledEngineProvider>
  );
};

Content.defaultProps = {};

export default React.memo(Content);
