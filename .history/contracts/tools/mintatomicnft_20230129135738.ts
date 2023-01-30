import {fileTypeFromBuffer} from 'file-type';
import fs from 'fs';

import Bundlr from "@bundlr-network/client";
export const mintAtomicNFT = async (address: any, raw_data: Uint8Array, name: any, descrition: any) => {

    
    const mimetype = await fileTypeFromBuffer(raw_data);


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
    const buffer = Buffer.from(raw_data.buffer);
    const tx = await bundlr.upload(buffer, { tags: contractTags });



}