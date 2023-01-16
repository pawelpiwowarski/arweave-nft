import { WarpFactory } from "warp-contracts";

const transactionId = "X6FREUVChm7KpDhJjSaUfN6z6oIF3byZISqISPCyPGs";

let warp;
let contract;

async function getContract() {
  warp = WarpFactory.forMainnet();

  // obtain the signature from the user who is using ArConnect wallet
  const signature = await window.arweaveWallet.signature("login");
  contract = warp.contract(transactionId).connect(signature);

  return contract;
}

export default getContract;
