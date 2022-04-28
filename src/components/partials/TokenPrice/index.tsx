import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import useResponsive from "../../../common/hooks/useResponsive";
import IconXptp from "../../../assets/icons/icon-xptp.svg";
import IconFuel from "../../../assets/icons/icon-fuel.svg";
import IconZjoe from "../../../assets/icons/icon-zjoe.svg";
import IconVtx from "../../../assets/icons/icon-vtx.svg";

interface Props {
  link?: string;
  icon: string;
  value: string;
}

const getTokenImgIcon = (icon: string) => {
  switch (icon) {
    case "icon-xptp":
      return <img alt="icon" src={IconXptp} />;
    case "icon-zjoe":
      return <img alt="icon" src={IconZjoe} />;
    case "icon-fuel":
      return <img alt="icon" src={IconFuel} />;
    case "icon-vtx":
      return <img alt="icon" src={IconVtx} />;

    default:
      break;
  }
};

const TokenPrice: FunctionComponent<Props> = ({ link, icon, value }) => {
  const isDesktop = useResponsive();

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
        isDesktop && styles.anchor__desktop
      )}
    >
      {getTokenImgIcon(icon)}
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
