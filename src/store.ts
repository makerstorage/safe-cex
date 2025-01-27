import { proxy } from '@iam4x/valtio';

import type { Store } from './types';

export const defaultStore: Store = {
  latency: 0,
  balance: { used: 0, free: 0, total: 0, upnl: 0 },
  markets: [],
  tickers: [],
  positions: [],
  orders: [],
  loaded: {
    balance: false,
    orders: false,
    markets: false,
    tickers: false,
    positions: false,
  },
  options: {
    isHedged: false,
  },
};

export const createStore = () => {
  return proxy<Store>(JSON.parse(JSON.stringify(defaultStore)));
};
