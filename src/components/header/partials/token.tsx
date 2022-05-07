import clsx from "clsx";
import React, { FunctionComponent } from "react";
import useResponsive from "../../../common/hooks/useResponsive";
import TokenPrice from "../../token-price";
interface Props {}

const HeaderToken: FunctionComponent<Props> = props => {
  const isDesktop = useResponsive();
  const tokenPrices = [
    {
      icon: "icon-vtx",
      value: "$0.78",
      link: "https://traderjoexyz.com/trade?outputCurrency=0x5817D4F0b62A59b17f75207DA1848C2cE75e7AF4#/",
    },
    {
      icon: "icon-xptp",
      value: "$2.87",
      link: "https://traderjoexyz.com/trade?outputCurrency=0x060556209e507d30f2167a101bfc6d256ed2f3e1",
    },
    {
      icon: "icon-zjoe",
      value: "$2.95",
      link: "https://traderjoexyz.com/trade?inputCurrency=AVAX&outputCurrency=0x22d4002028f537599be9f666d1c4fa138522f9c8#/",
    },
    {
      icon: "icon-fuel",
      value: "242.5",
      link: "https://snowtrace.io/gastracker",
    },
  ];
  return (
    <div className={clsx("flex", !isDesktop && "gap-2.5")}>
      {tokenPrices.map((tp, idx) => (
        <TokenPrice {...tp} key={`tp_${idx}`} />
      ))}
    </div>
  );
};

HeaderToken.defaultProps = {};

export default React.memo(HeaderToken);
