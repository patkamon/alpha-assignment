export type Asset = {
    pool: string;
    address: string,
    decimals: number
  };

export type Collection = {
    [key: string]: Pool;
  };
  
export type Pool = {
    supplyApy: number;
    borrowApy: number;
    totalSupply: number;
    totalBorrow: number;
    util: number;
  };

export const table: Asset[]   =     [
        {
            "pool": "USDT",
            "address": "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
            "decimals": 6
        },
        {
            "pool": "DAI",
            "address": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
            "decimals": 18
        },
        {
            "pool": "ETH",
            "address": "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
            "decimals": 18
        }, {
            "pool": "USDC",
            "address": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
            "decimals": 6
        },
        {
            "pool": "BTC",
            "address": "0xccF4429DB6322D5C611ee964527D42E5d685DD6a",
            "decimals": 8
        }


    ]