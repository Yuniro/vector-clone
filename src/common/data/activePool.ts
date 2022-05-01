import { PoolType, ModelPool } from "../models";

const dataset: ModelPool = {
  type: PoolType.STAKED,
  token: {
    name: "USDC.e",
    icon: "icon-usdc",
    symbol: "USDC.e",
  },
  increment: 7.2,
  depositVal: 0,
  tvlValue: "$46,944,382",
  claimable: "$0.00",
  background: "blue",
  earnings: [
    {
      token: {
        name: "PTP",
        icon: "icon-ptp",
        symbol: "PTP",
      },
      earning: 0,
      price: 1.27,
      total: 0,
    },
    {
      token: {
        name: "VTX",
        icon: "icon-vtx",
        symbol: "VTX",
      },
      earning: 0,
      price: 0.49,
      total: 0,
    },
  ],
};

export default dataset;
