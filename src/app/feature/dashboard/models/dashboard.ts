export interface DataDashboard	

{
  _id: string;
  total_transaction: number;
  total_hosts: number
  total_storage: number;
  remaining_storage: number;
  used_storage: number;
  circulating_supply: number;
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number
}