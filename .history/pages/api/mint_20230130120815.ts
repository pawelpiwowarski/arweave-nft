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

    const formData = new FormData();


    


  



    
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }