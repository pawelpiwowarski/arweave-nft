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
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });


      const {address,blob,name,description} = fields

      console.log(files)

      console.log(Buffer.from(blob as any))



      const tx = mintAtomicNFT(address,Buffer.from(blob as any),name,description)
      res.end(JSON.stringify(tx));
    });

    return;


    


  



    
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }