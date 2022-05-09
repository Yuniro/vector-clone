import { PoolType, ModelPool } from "../models";

const dataset: ModelPool[] = [
  {
    type: PoolType.PRIMARY,
    token: {
      name: "VTX",
      symbol: "VTX",
      icon: "icon-vtx",
    },
    description: "Stake VTX",
    background: "purple",
    month: "APR",
    increment: 20.8,
    depositVal: 0,
    tvlValue: "$11,174,986",
    claimable: "$0.00",
    stake: {
      title:
        "Stake VTX on Vector to earn a portion of the platform's revenue, distributed as xPTP and zJOE tokens.",
    },
    unstake: true,
    source: [
      {
        token: {
          name: "VTX",
          symbol: "VTX",
          icon: "icon-vtx",
        },
        apr: 5.29,
        apyWeekly: 5.43,
        apyDaily: 5.43,
      },
      {
        token: {
          name: "xPTP",
          symbol: "xPTP",
          icon: "icon-xptp",
        },
        apr: 5.18,
        apyWeekly: 5.31,
        apyDaily: 5.31,
      },
      {
        token: {
          name: "zJOE",
          symbol: "zJOE",
          icon: "icon-zjoe",
        },
        apr: 4.52,
        apyWeekly: 4.62,
        apyDaily: 4.62,
      },
    ],
    info: [
      {
        title: "VTX Contract",
        id: "0x5817d4f0b62a59b17f75207da1848c2ce75e7af4",
      },
      {
        title: "Staking Contract",
        id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
      },
    ],
  },
  {
    type: PoolType.PRIMARY,
    token: {
      name: "PTP",
      symbol: "xPTP",
      icon: "icon-ptp",
    },
    description: "Convert PTP / Stake xPTP",
    background: "blue-light",
    month: "APR",
    increment: 261.8,
    depositVal: 0,
    tvlValue: "$11,174,986",
    claimable: "$0.00",
    convert: {
      title:
        "Convert PTP to xPTP, then stake xPTP to earn protocol revenue plus VTX tokens",
      description:
        "Important: Converting PTP to xPTP is irreversible. You may stake and unstake xPTP tokens, but not convert them back to PTP via our protocol. Secondary markets exist to allow the exchange of xPTP for PTP (see Trader Joe).",
    },
    stake: {
      title:
        "By staking xPTP, you are earning approximately 66.6% of the Platypus pool's revenue, plus additional VTX tokens on top of that.",
    },
    unstake: true,
    info: [
      {
        title: "PTP Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Converting Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
      {
        title: "xPTP Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
      {
        title: "Staking Contract",
        id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
      },
    ],
  },
  {
    type: PoolType.PRIMARY,
    token: {
      name: "JOE",
      symbol: "zJOE",
      icon: "icon-joe",
    },
    description: "Convert JOE / Stake zJOE",
    background: "red",
    month: "APR",
    increment: 130.7,
    depositVal: 0,
    tvlValue: "$9,721,986",
    claimable: "$0.00",
    convert: {
      title:
        "Convert JOE to zJOE, then stake zJOE to earn protocol revenue plus VTX tokens",
      description:
        "Important: Converting JOE to zJOE is irreversible. You may stake and unstake zJOE tokens, but not convert them back to JOE via our protocol. Secondary markets exist to allow the exchange of zJOE for JOE (see Trader Joe).",
    },
    stake: {
      title:
        "By staking zJOE, you are earning approximately 66.6% of the Trader Joe pool's revenue, plus additional VTX tokens on top of that.",
    },
    unstake: true,
    info: [
      {
        title: "JOE Contract",
        id: "0x22d4002028f537599bE9f666d1c4Fa138522f9c8",
      },
      {
        title: "Converting Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
      {
        title: "zJOE Contract",
        id: "0x060556209E507d30f2167a101bFC6D256Ed2f3e1",
      },
      {
        title: "Staking Contract",
        id: "0x423D0FE33031aA4456a17b150804aA57fc157d97",
      },
    ],
  },
];

export default dataset;
