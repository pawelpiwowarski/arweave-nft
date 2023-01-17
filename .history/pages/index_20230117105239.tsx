import { useState } from "react";
import getContract from '../configureWarpClient'
import { useRouter } from "next/router";
function HomePage() {
 const [address, setAddress] = useState<string | null>(null);
const [img, setImg] = useState<string | null>(null);
  async function handleLogin() {

    const {transactionId, contract} = await getContract();

    setImg(`https://arweave.net/${transactionId}`)
    
    setAddress(await window.arweaveWallet.getActiveAddress());

    // fetch the data from local endpoint
    const res = await fetch('http://localhost:3000/api/hello', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

  return (

      // center the button
      <div style={{display: 'flex', justifyContent: 'center'}}>
      
      
      <div>
            <button onClick={handleLogin}>Show Info</button>

      { address && <h1>Address: {address}</h1>}
      { img && <img src={img} />}
    </div>
    </div>
    
  );
}

export default HomePage;