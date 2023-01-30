import {fileTypeFromBuffer} from 'file-type';
import fs from 'fs';
import { configureWallet, warp } from "./configureServerEnv.js";

import Bundlr from "@bundlr-network/client";
export const mintAtomicNFT = async (address: any, raw_data: any, name: any, descrition: any) => {


    // create a buffer from the uint8array

     // convert buffer to uint8array

    const {mimetype} = raw_data
    console.log(mimetype)
    console.log(address,name,descrition)

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

    const jwk = JSON.parse(fs.readFileSync("/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mainnet.json").toString());

    const bundlr = new Bundlr(
      "https://node2.bundlr.network",
      "arweave",
      jwk
    );
    
    // turn uint8array into a buffer
    console.log("Uploading file to Arweave...");
    console.log(raw_data.filepath)
    const stream = fs.readFileSync(raw_data.filepath)

    console.log(stream)
    const tx = await bundlr.upload(stream , { tags: contractTags });
    const { contractTxId } = await warp.register(tx.id, "node2");
    console.log(`Check the data: https://arweave.net/${contractTxId}`);

    return `Check the data: https://arweave.net/${contractTxId}`;


}