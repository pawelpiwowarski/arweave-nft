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
    <div className="bg-[url('https://pbs.twimg.com/media/FlzDzwWaEAAjCkV.jpg')] flex justify-center items-center h-screen bg-gray-100">

      
      <h1 className="text-3xl font-bold underline" >Mint Your Atomic NFT using Smartweave </h1>
      <form onSubmit={getContract}>
  <div className="flex flex-col m-4">
    <label className="text-lg font-medium mb-2" >Name:</label>
    <input className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5"
     type="text" id="name" name="name" placeholder="Enter NFT name" required/>
  </div>

  <div className="flex flex-col m-4">
    <label className="text-lg font-medium mb-2" >Description:</label>
    <textarea className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5" 
    id="description" name="description" placeholder="Enter NFT description" required></textarea>
  </div>

  <div className="flex flex-col m-4">
    <label className="text-lg font-medium mb-2" >File:</label>
    <input className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5"
     type="file" id="file" name="file" placeholder="Select NFT file" required/>
  </div>

  <div className="flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
      Mint NFT
    </button>
  </div>
</form>






    </div>
    
  );
}

export default HomePage;
