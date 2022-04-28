export const EPOCH_INTERVAL = 2200;
export const TOKEN_DECIMALS = 9;
export const BLOCK_RATE_SECONDS = 2;

export enum Networks {
  UNKNOW = 0,
  POLYGON_MAINNET = 137,
  AVALANCHE_MAINNET = 43114
}

export const RPCURL = {
  POLYGON_MAINNET: 'https://polygon-rpc.com',
  AVALANCHE_MAINNET: 'https://api.avax.network/ext/bc/C/rpc',
  // POLYGON_MAINNET: 'http://localhost:8545',
};

export const DEFAULT_NETWORK = Networks.POLYGON_MAINNET;
