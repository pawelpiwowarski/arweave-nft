import {fileTypeFromBuffer} from 'file-type';


export const mintAtomicNFT = async (address: string, raw_data: Uint8Array, name: string, descrition: string) => {

    
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
            owner: "_ei0RuqVv5j6oVIOXoMSGOrWOOzGMrhiWnR3AS0EOhM",
          }),
        },
        { name: "Title", value: "Asset" },
        { name: "Description", value: "Description" },
        { name: "Type", value: "Text" },
    ]


}