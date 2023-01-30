import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'

export default async function handler(req, res) {
  if (req.method === 'POST') {


    const {address, buffer, name, description} = req.body;
    console.log(typeof buffer)
    await mintAtomicNFT(address,buffer, name, description);

    res.status(200).json({ name: 'The Mint Was Sucessful ' })
  } else {
    // Handle any other HTTP method
  }
  res.status(200).json({ text: 'This method requires a POST request' })

  }