import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'

export default async function handler(req, res) {
  if (req.method === 'POST') {


    // get the data from formdata
    const {address, name, description, file} = req.body
    // get the file from formdata

    res.status(200).json({ name: 'The Mint Was Sucessful ' })
  } else {
    // Handle any other HTTP method
  }
  res.status(200).json({ text: 'This method requires a POST request' })

  }