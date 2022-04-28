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
  unstake?: boolean;
  deposit?: boolean;
  withdraw?: boolean;
  info: ModelPoolInfo[];
}

export interface ModelPoolAlt {
  background: string;
  primary: ModelPool;
  secondary: ModelPool;
}
