import { PoolType, ModelPoolAlt } from "../models";

const dataset: ModelPoolAlt[] = [
  {
    background: "blue",
    primary: {
      type: PoolType.PLATYPUS_ALT,
      token: {
        name: "USDC",
        icon: "icon-usdc",
        symbol: "USDC",
      },
      increment: 9.1,
      depositVal: 0,
      tvlValue: "$29,994,382",
      claimable: "$0.00",
      background: "yellow",
      withdraw: true,
      deposit: true,
      info: [
        {
          title: "USDC Contract",
          id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
        },
        {
          title: "Staking Contract",
          id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
        },
      ],
    },
    secondary: {
      type: PoolType.PLATYPUS_ALT,
      token: {
        name: "UST",
        icon: "icon-ust",
        symbol: "UST",
      },
      increment: 9.1,
      depositVal: 0,
      tvlValue: "$29,994,382",
      claimable: "$0.00",
      background: "yellow",
      withdraw: true,
      deposit: true,
      info: [
        {
          title: "UST Contract",
          id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
        },
        {
          title: "Staking Contract",
          id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
        },
      ],
    },
  },
];

export default dataset;
