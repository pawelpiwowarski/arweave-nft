import { useState } from "react";
import connectToContract from '../configureWarpClient'
import FormData from "form-data";

function HomePage() {

const [name, setName] = useState<string | null>(null);
const [contract, setContract] = useState<string | null>(null);
const [image, setImage] = useState<string | null>(null);
const [description, setDescription] = useState<string | null>(null);
const [loading, setLoading] = useState<boolean>(false);



  async function handleSubmision(event: any) {
    setLoading(true);
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

    const respoonse  = await fetch('/api/mint', { method: 'POST', body: formData });

    
    const {image, contract} = await respoonse.json();
    console.log(image, contract);
    setContract(contract);
    setImage(image);
    setLoading(false);
    
  }
  async function handleFile() {

    console.log('file selected');



  }


  

  return (

       //centered div and apply nice background color
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center h-screen bg-gray-100">

      
      { !contract && <h1 className="text-3xl font-bold underline" >Mint Your Atomic NFT using Smartweave </h1>}
      { contract && <img className="mx-auto" src={image} alt="NFT" /> }
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
    <button className={`bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 ${
        loading ? 'cursor-wait' : ''
      }`} onClick={handleSubmision}>
      
     { loading &&  "Mint NFT"} 
      {!loading ? (
        <span className="spinner spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
      ) : (
        'Minting...'
      )}
    </button>
   
  </div>
  {contract && 
  <div className="flex  flex-col m-4">
    <p className="text-lg font-medium mb-2" >  Your Atomic NFT has been sucessfully minted on the Arweave blockchain  you can see by clicking on this link <a target="_blank" href={contract}> {contract}</a></p>


    


  </div>

  }

</form>






    </div>
    
  );
}

export default HomePage;
