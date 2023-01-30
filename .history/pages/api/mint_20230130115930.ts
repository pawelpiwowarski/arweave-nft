import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'
import {formidable} from 'formidable'
export default async function handler(req, res, next) {
  if (req.method === 'POST') {


    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      console.log(fields)
      console.log(files)
      const {address, name, description} = fields
      const {buffer} = files

      console.log(buffer)
      
   
    });



    
    return res.status(200).json({ name: 'The Mint Was Sucessful ' })
  } else {
    // Handle any other HTTP method
  }
  return res.status(200).json({ text: 'This method requires a POST request' })

  }