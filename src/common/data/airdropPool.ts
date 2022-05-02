import { PoolType, ModelPool } from "../models";

const dataset: ModelPool = {
  type: PoolType.AIRDROP,
  token: {
    name: "vePTP holders airdrop",
    icon: "icon-airdrop",
    symbol: "",
  },
  increment: 0,
  depositVal: 0,
  tvlValue: "$0.00",
  claimable: "$0.00",
  background: "blue",
};

export default dataset;
