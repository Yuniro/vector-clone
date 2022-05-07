import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import useResponsive from "../../common/hooks/useResponsive";

interface Props {
  link?: string;
  icon: string;
  value: string;
}

const TokenPrice: FunctionComponent<Props> = ({ link, icon, value }) => {
  const isDesktop = useResponsive();

  const { PUBLIC_URL } = process.env;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "flex items-center",
        styles.anchor,
        icon === "icon-fuel" && styles.anchor__fuel,
        isDesktop && "px-2 gap-2.5",
        isDesktop && styles["anchor--desktop"]
      )}
    >
      <img alt="icon" src={`${PUBLIC_URL}/assets/icons/${icon}.svg`} />
      <span
        className={clsx(
          "font-semibold",
          isDesktop ? "text-sm leading-3" : "text-xs leading-1"
        )}
      >
        {value}
      </span>
    </a>
  );
};

TokenPrice.defaultProps = {};

export default React.memo(TokenPrice);
