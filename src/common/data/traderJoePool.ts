import { PoolType, ModelPool } from "../models";

const dataset: ModelPool[] = [
  {
    type: PoolType.TRADER_JOE,
    token: {
      name: "BNB/AVAX",
      icon: "icon-bnb-avax",
      symbol: "BNB/AVAX",
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
        title: "BNB/AVAX Contract",
        id: "0x9EF0C12b787F90F59cBBE0b611B82D30CAB92929",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
  {
    type: PoolType.TRADER_JOE,
    token: {
      name: "JOE/AVAX",
      icon: "icon-joe-avax",
      symbol: "JOE/AVAX",
    },
    increment: 207.0,
    depositVal: 0,
    tvlValue: "$29,994,382",
    claimable: "$0.00",
    background: "red",
    withdraw: true,
    deposit: true,
    info: [
      {
        title: "JOE/AVAX Contract",
        id: "0x9EF0C12b787F90F59cBBE0b611B82D30CAB92929",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
];

export default dataset;
