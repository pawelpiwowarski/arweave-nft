import { useState } from "react";
import connectToContract from '../configureWarpClient'
import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'


function HomePage() {

const [name, setName] = useState<string | null>(null);
const [description, setDescription] = useState<string | null>(null);
const [buffer, setFile] = useState<Buffer | null>(null);



  async function handleSubmision(event: any) {
    // prevent fromm re
    event.preventDefault();
    const {address} = await connectToContract();


   const response =  await fetch('http://localhost:3000/mint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        
        address,
        buffer,
        name,
        description
      }),
    })

    const data = await response.json();
    console.log(data);

    
  }
  async function handleFile() {
    const file = document.getElementById('file') as HTMLInputElement;

    const fileData = file.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(fileData);

    reader.onload = async () => {
      const buffer = reader.result as ArrayBuffer;
      const fileBuffer = Buffer.from(buffer);
      setFile(fileBuffer);
    };



  }


  

  return (

       //centered div and apply nice background color
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center h-screen bg-gray-100">

      
      <h1 className="text-3xl font-bold underline" >Mint Your Atomic NFT using Smartweave </h1>
      <form>
  <div className="flex flex-col m-4">
    <label className="text-lg font-medium mb-2" >Name:</label>
    <input className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5"
     type="text" id="name" name="name" placeholder="Enter NFT name" onChange= {(e)=> {

      setName(e.target.value);

     }}required/>
  </div>

  <div className="flex flex-col m-4">
    <label className="text-lg font-medium mb-2" >Description:</label>
    <textarea className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5" 
    id="description" name="description" placeholder="Enter NFT description" onChange = {(e)=> {
        
        setDescription(e.target.value);
  
    }}required></textarea>
  </div>

  <div className="flex flex-col m-4">
    <label className="text-lg font-medium mb-2" >File:</label>
    <input className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5"
     type="file" id="file" name="file" onChange={handleFile} placeholder="Select NFT file" required/>
  </div>

  <div className="flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" onSubmit={handleSubmision}>
      
      Mint NFT
    </button>
  </div>
</form>






    </div>
    
  );
}

export default HomePage;
