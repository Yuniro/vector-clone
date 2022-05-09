export type ModelPoolInfo = {
  title: string;
  id: string;
};

export type ModelPoolStake = {
  title: string;
};

export type ModelPoolConvert = {
  title: string;
  description?: string;
};

export enum PoolType {
  PRIMARY = "primary",
  PLATYPUS_PRIMARY = "platypusPrimary",
  PLATYPUS_ALT = "platypusAlt",
  TRADER_JOE = "traderJoe",
  VECTOR_LP = "vectorLp",
  STAKED = "staked",
  AIRDROP = "airdrop",
}

export type ModelPoolToken = {
  name: string;
  icon?: string;
  symbol?: string;
};

export interface ModelPool {
  type: PoolType;
  token: ModelPoolToken;
  tokenSecondary?: ModelPoolToken;
  isBoosted?: boolean;
  description?: string;
  month?: string;
  background: string;
  increment: number;
  depositVal: number;
  tvlValue: string;
  claimable: string;
  convert?: ModelPoolConvert;
  stake?: ModelPoolStake;
  source?: ModelPoolSource[];
  unstake?: boolean;
  deposit?: boolean;
  withdraw?: boolean;
  earnings?: ModelPoolEarning[];
  info?: ModelPoolInfo[];
}

export interface ModelPoolAlt {
  background: string;
  primary: ModelPool;
  secondary: ModelPool;
}

export interface ModelPoolEarning {
  token: ModelPoolToken;
  earning: number;
  price: number;
  total: number;
}

export interface ModelPoolSource {
  token: ModelPoolToken;
  apr: number;
  apyWeekly: number;
  apyDaily: number;
}
