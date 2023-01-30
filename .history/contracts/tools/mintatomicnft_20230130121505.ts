import {fileTypeFromBuffer} from 'file-type';
import fs from 'fs';
import { configureWallet, warp } from "./configureServerEnv.js";

import Bundlr from "@bundlr-network/client";
export const mintAtomicNFT = async (address: any, raw_data: any, name: any, descrition: any) => {


    // create a buffer from the uint8array
     console.log(raw_data.buffer)
    const mimetype = await fileTypeFromBuffer(raw_data.buffer);


    const contractTags = [ 

        { name: "Content-Type", value: mimetype },
        { name: "App-Name", value: "SmartWeaveContract" },
        { name: "App-Version", value: "0.1.0" },
        {
          name: "Contract-Src",
          value: "X6FREUVChm7KpDhJjSaUfN6z6oIF3byZISqISPCyPGs",
        },
        {
          name: "Init-State",
          value: JSON.stringify({
            owner: address,
          }),
        },
        { name: "Title", value: name },
        { name: "Description", value: descrition },
        { name: "Type", value: "Text" },
    ]

    const jwk = JSON.parse(fs.readFileSync("mainnet.json").toString());

    const bundlr = new Bundlr(
      "https://node2.bundlr.network",
      "arweave",
      jwk
    );
    
    // turn uint8array into a buffer
    console.log("Uploading file to Arweave...");

    const tx = await bundlr.upload(raw_data.buffer as Buffer , { tags: contractTags });
    const { contractTxId } = await warp.register(tx.id, "node2");
    console.log(`Check the data: https://arweave.net/${contractTxId}`);

    return `Check the data: https://arweave.net/${contractTxId}`;


}