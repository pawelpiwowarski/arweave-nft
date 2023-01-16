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

  const address = await window.arweaveWallet.getActiveAddress();

  const signature = await window.arweaveWallet.signature(
    address,
    "RsaPssParams"
  );

  contract = warp.contract(transactionId).connect(signature);

  return contract;
}

export default getContract;
