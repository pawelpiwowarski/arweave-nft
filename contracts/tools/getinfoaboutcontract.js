// get info about contract provided by contractTxId

import { configureWallet, warp } from "./configureServerEnv.js";

async function getInfoAboutContract() {
  const wallet = warp;
  const contractTxId = "Tu-VG5D_GAcLy7tszM28QjZ2kbNEBKJf-8qgzjn-Vvo";

  const contract = await warp.contract(contractTxId).connect(wallet);
  const cachedState = await contract.readState();
  console.log(cachedState);
  console.log(contractTxId);
}

getInfoAboutContract();
