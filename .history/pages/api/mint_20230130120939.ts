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


    const session = await getSession({ req });

    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ fields, files }, null, 2));
    });

    return;


    


  



    
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }