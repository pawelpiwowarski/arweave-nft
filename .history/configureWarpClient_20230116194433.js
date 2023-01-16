import { WarpFactory } from "warp-contracts";

const transactionId = "X6FREUVChm7KpDhJjSaUfN6z6oIF3byZISqISPCyPGs";

import wallet from "./contracts/tools/mainnet.json";

let warp;
let contract;

async function getContract() {
  warp = WarpFactory.forMainnet();
  contract = warp.contract(transactionId).connect(wallet);
}