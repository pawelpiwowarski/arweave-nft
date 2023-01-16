import { WarpFactory } from "warp-contracts";

const transactionId = "o9u_KYD5-Tn-VRmeNAic0kdFqrLLz0bYgMu9COr7Gk0";

let warp;
let contract;

async function getContract() {
  warp = WarpFactory.forMainnet();

  // obtain the signature from the user who is using ArConnect wallet

  await window.arweaveWallet.connect([
    "ACCESS_ADDRESS",
    "SIGN_TRANSACTION",
    "SIGNATURE",
  ]);

  contract = warp.contract(transactionId).connect("use_wallet");

  console.log("contract", contract);
  return { transactionId, contract };
}

export default getContract;
