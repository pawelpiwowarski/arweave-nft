import { WarpFactory } from "warp-contracts";

const transactionId = "X6FREUVChm7KpDhJjSaUfN6z6oIF3byZISqISPCyPGs";

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

  const address = await window.arweaveWallet.getActiveAddress();

  const signature = await window.arweaveWallet.signature(address);

  contract = warp.contract(transactionId).connect("use_wallet");

  return contract;
}

export default getContract;
