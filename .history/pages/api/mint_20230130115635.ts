import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'
const {formidable} = require('formidable')
export default async function handler(req, res) {
  if (req.method === 'POST') {


    // get the data from formdata
    const {address, buffer, name, descrition} = req.body as any
    // get the file from formdata
    
    
    return res.status(200).json({ name: 'The Mint Was Sucessful ' })
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }