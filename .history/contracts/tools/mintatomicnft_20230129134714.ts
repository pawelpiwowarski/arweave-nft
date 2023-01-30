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
            owner: address,
          }),
        },
        { name: "Title", value: name },
        { name: "Description", value: descrition },
        { name: "Type", value: "Text" },
    ]


}