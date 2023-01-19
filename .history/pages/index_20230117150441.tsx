import { useState } from "react";
import getContract from '../configureWarpClient'


function HomePage() {
 const [address, setAddress] = useState<string | null>(null);
const [img, setImg] = useState<string | null>(null);
const [res, setRes] = useState<string | null>(null);
  async function handleLogin() {

    const {transactionId, contract} = await getContract();

    setImg(`https://arweave.net/${transactionId}`)
    
    setAddress(await window.arweaveWallet.getActiveAddress());

    // fetch the data from local endpoint
    const response = await fetch('http://localhost:3000/api/hello', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const {name} = (await response.json());
    setRes(name);
  }

  return (

       //centered div and apply nice background color
    <div className="flex justify-center items-center h-screen bg-gray-100">

      
      <h1 className="text-3xl font-bold underline" >Mint Your Atomic NFT using Smartweave </h1>


      <div className="flex flex-col items-center">

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogin}>Mint</button>

      { address && <h1 className="text-3xl font-bold underline" >Address: {address}</h1>}
      { img && <img src={img} />}
    </div>
    </div>
    
  );
}

export default HomePage;
