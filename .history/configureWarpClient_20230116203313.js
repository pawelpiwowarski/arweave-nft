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

  // connect to the contract

  contract = await warp.connect(transactionId, signature);

  return contract;
}

export default getContract;
