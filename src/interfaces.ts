export interface Game {
  name: string;
  playerCount: number;
  score: number;
  price: string;
  origQty: string;
}

// Think about how the game is laid out and structure it

// export interface DcaBot {
//     id: number;
//     userID: number;
//     exchange: string;
//     alias: string;
//     name: string;
//     createdAt: number;
//     quoteAsset: string;
//     buyingAmount: number;
//     buyingFrequency: number;
//     status: string;
//     usedKalaFuel: number;
//     numberOfTrades: number;
//     quoteAssetSpent: number;
//     coins: DcaBotCoin[];
//   }

//   export interface DcaBotCoin {
//     asset: string;
//     percentage: number;
//   }
