import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'
import {formidable} from 'formidable'
import { getSession } from "next-auth/react";

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res, next) {
  if (req.method === 'POST') {




    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });


      const {address,name,description} = fields

      const {blob} = files

      const fileReader = new FileReader();

      fileReader.onloadend = async () => {

        const arrayBuffer = fileReader.result;
        console.loge(arrayBuffer)
        await mintAtomicNFT(address,arrayBuffer,name,description)
      }



    });

    return;


    


  



    
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }