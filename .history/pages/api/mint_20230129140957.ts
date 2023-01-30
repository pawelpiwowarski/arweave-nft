import { mintAtomicNFT } from '../../utils/mintAtomicNFT';

export default async function handler(req, res) {
  if (req.method === 'POST') {


    const {address, raw_data, name, description} = req.body;
    await mintAtomicNFT(address,raw_data, name, description, );

    res.status(200).json({ name: 'The Mint Was Sucessful ' })
  } else {
    // Handle any other HTTP method
  }

  }