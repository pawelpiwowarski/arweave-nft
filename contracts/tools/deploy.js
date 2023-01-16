import fs from "fs";
import { configureWallet, warp } from "./configureServerEnv.js";

async function deploy() {
  const wallet = await configureWallet();
  const state = fs.readFileSync("./state.json", "utf8");
  const contractSrc = fs.readFileSync("../../../dist/contract.js", "utf8");
  const { contractTxId } = await warp.createContract.deploy({
    wallet,
    initState: state,
    src: contractSrc,
  });
  fs.writeFileSync(
    "./transactionid.js",
    `export const contractTxId = "${contractTxId}"`
  );
  const contract = await warp.contract(contractTxId).connect(wallet);

  const cachedState = await contract.readState();
  console.log(cachedState);
  console.log(contractTxId);
}
deploy();
