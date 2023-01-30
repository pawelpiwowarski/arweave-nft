import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'
import {formidable} from 'formidable'
import { getSession } from "next-auth/react";

export default async function handler(req, res, next) {
  if (req.method === 'POST') {


    const form = formidable({ multiples: true });

  



    
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }