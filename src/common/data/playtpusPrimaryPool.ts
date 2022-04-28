import { PoolType, ModelPool } from "../models";

const dataset: ModelPool[] = [
  {
    type: PoolType.PLATYPUS_PRIMARY,
    token: {
      name: "DAI.e",
      icon: "icon-dai_e",
      symbol: "DAI.e",
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
        title: "DAI.e Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
  {
    type: PoolType.PLATYPUS_PRIMARY,
    token: {
      name: "USDC",
      icon: "icon-usdc",
      symbol: "USDC",
    },
    increment: 7.7,
    depositVal: 0,
    tvlValue: "$34,800,382",
    claimable: "$0.00",
    background: "blue",
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
  {
    type: PoolType.PLATYPUS_PRIMARY,
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
    withdraw: true,
    deposit: true,
    info: [
      {
        title: "USDC.e Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
  {
    type: PoolType.PLATYPUS_PRIMARY,
    token: {
      name: "USDT",
      icon: "icon-usdt",
      symbol: "USDT",
    },
    increment: 9.3,
    depositVal: 0,
    tvlValue: "$46,944,382",
    claimable: "$0.00",
    background: "green",
    withdraw: true,
    deposit: true,
    info: [
      {
        title: "USDT Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
  {
    type: PoolType.PLATYPUS_PRIMARY,
    token: {
      name: "USDT.e",
      icon: "icon-usdt",
      symbol: "USDT.e",
    },
    increment: 6.2,
    depositVal: 0,
    tvlValue: "$46,944,382",
    claimable: "$0.00",
    background: "green",
    withdraw: true,
    deposit: true,
    info: [
      {
        title: "USDT.e Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
];

export default dataset;
