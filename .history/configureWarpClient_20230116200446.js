import { WarpFactory } from "warp-contracts";

const transactionId = "o9u_KYD5-Tn-VRmeNAic0kdFqrLLz0bYgMu9COr7Gk0";

let warp;
let contract;

async function getContract() {
  warp = WarpFactory.forMainnet();
  contract = warp.contract(transactionId).connect();

  return contract;
}

export default getContract;
