import contractTags from "./contractTags.js";
import Bundlr from "@bundlr-network/client";
import { WarpFactory } from "warp-contracts";
import { configureWallet, warp } from "./configureServerEnv.js";

import fs from "fs";

export const deploy = async (data, tags) => {
  const jwk = JSON.parse(fs.readFileSync("mainnet.json").toString());
  const bundlr = new Bundlr.default(
    "https://node2.bundlr.network",
    "arweave",
    jwk
  );

  const tx = await bundlr.upload(data, { tags: contractTags });

  const { contractTxId } = await warp.register(tx.id, "node2");
  console.log(`Check the data: https://arweave.net/${contractTxId}`);
};
