import { WarpFactory } from "warp-contracts";
const arweave =  require("arweave");

let warp;


async function connectToContract() {
  warp = WarpFactory.forMainnet();

  // obtain the signature from the user who is using ArConnect wallet

  await window.arweaveWallet.connect([
    "ACCESS_ADDRESS",
    "SIGN_TRANSACTION",
    "SIGNATURE",
  ]);

  const address = await window.arweaveWallet.getActiveAddress();
  return { address };


  const tx = await arweave.createTransaction({});
  
 
    




export default connectToContract;
