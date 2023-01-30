import { useState } from "react";
import connectToContract from '../configureWarpClient'
import {mintAtomicNFT} from '/Users/pawelpiwowarski/Arweave/arwaeve-nft/contracts/tools/mintatomicnft'
import FormData from "form-data";

function HomePage() {

const [name, setName] = useState<string | null>(null);
const [respoonse, setResponse] = useState<string | null>(null);
const [description, setDescription] = useState<string | null>(null);




  async function handleSubmision(event: any) {
    const file = document.getElementById('file') as HTMLInputElement;

    // prevent fromm re
    event.preventDefault();
    const {address} = await connectToContract();
    console.log(file.files[0])
    const formData = new FormData() as any;
    formData.append('address', address);
    formData.append('blob', file.files[0]);
    formData.append('name', name);
    formData.append('description', description);

    const respoonse  = await fetch('http://localhost:3000/api/mint', { method: 'POST', body: formData });

    
    const {tx} = await respoonse.json();
    setResponse(tx);

    
  }
  async function handleFile() {

    console.log('file selected');



  }


  

  return (

       //centered div and apply nice background color
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center h-screen bg-gray-100">
      <img className="mx-auto" src={respoonse} alt="NFT" />
      
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
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  onClick={handleSubmision}>
      
      Mint NFT
    </button>
   
  </div>
  {respoonse && 
  <div className="flex  flex-col m-4">
    <p className="text-lg font-medium mb-2" >  Your Atomic NFT has been sucessfully minted on the Arweave blockchain  you can see by clicking on this link <a target="_blank" href={respoonse}> {respoonse}</a></p>


    


  </div>

  }

</form>






    </div>
    
  );
}

export default HomePage;
