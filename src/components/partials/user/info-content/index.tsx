import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import useResponsive from "../../../../common/hooks/useResponsive";
import styles from "./styles.module.scss";

interface Props {
  isReward?: boolean;
  title: string;
  currency?: string;
  value: string;
}

const InfoContent: FunctionComponent<Props> = ({
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
              styles.info__header,
              isDesktop && styles.info__header__desktop
            )}
          >
            {title}
          </Typography>
          <Typography
            className={clsx(
              "font-bold",
              styles.info__value,
              isDesktop && styles.info__value__desktop,
              isReward && styles["info__value--reward"]
            )}
          >
            {value}{" "}
            {currency && (
              <span
                className={clsx(
                  styles.info__currency,
                  isDesktop && styles.info__currency__desktop
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

InfoContent.defaultProps = {};

export default React.memo(InfoContent);
