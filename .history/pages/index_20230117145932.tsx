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

      // center the button
      <div style={{display: 'flex', justifyContent: 'center'}}>
      
      <h1 className="text-3xl font-bold underline" >Tail Wind Test</h1>
      <div>
            <button onClick={handleLogin}>Show Info</button>

      { address && <h1 className="text-3xl font-bold underline" >Address: {address}</h1>}
      { img && <img src={img} />}
    </div>
    </div>
    
  );
}

export default HomePage;
