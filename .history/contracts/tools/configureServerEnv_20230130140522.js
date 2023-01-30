import { WarpFactory } from "warp-contracts";
import fs from "fs";
const env = process.env.WARPENV || "mainnet";
let warp;
if (env == "testnet") {
  warp = WarpFactory.forTestnet();
} else if (env == "mainnet") {
  warp = WarpFactory.forMainnet();
} else {
  throw new Error("Invalid environment");
}

async function configureWallet() {
  try {
    if (env == "testnet") {
      try {
        return JSON.parse(fs.readFileSync("./testnet.json", "utf-8"));
      } catch (err) {
        console.log("Generating new wallet");

        const jwk = await warp.testing.arweave.wallets.genereteWallet();
        fs.writeFileSync("./testnet.json", JSON.stringify(jwk));
        return jwk;
      }
    } else {
      try {
        return JSON.parse(fs.readFileSync("./mainnet.json", "utf-8"));
      } catch (err) {
        console.log("Generating new wallet");

        const jwk = await warp.arweave.wallets.generate();

        fs.writeFileSync("./mainnet.json", JSON.stringify(jwk));
        return jwk;
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}
export { configureWallet, warp };
