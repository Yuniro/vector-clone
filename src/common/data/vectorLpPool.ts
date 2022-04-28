import { PoolType, ModelPool } from "../models";

const dataset: ModelPool[] = [
  {
    type: PoolType.VECTOR_LP,
    token: {
      name: "VTX-AVAX",
      icon: "icon-vtx-avax",
      symbol: "VTX-AVAX",
    },
    increment: 9.1,
    depositVal: 0,
    tvlValue: "$29,994,382",
    claimable: "$0.00",
    background: "red",
    withdraw: true,
    deposit: true,
    info: [
      {
        title: "VTX-AVAX Contract",
        id: "0x9EF0C12b787F90F59cBBE0b611B82D30CAB92929",
      },
      {
        title: "Staking Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
    ],
  },
  {
    type: PoolType.VECTOR_LP,
    token: {
      name: "xPTP-PTP",
      icon: "icon-xptp-ptp",
      symbol: "xPTP-PTP",
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
        title: "xPTP-PTP Contract",
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
