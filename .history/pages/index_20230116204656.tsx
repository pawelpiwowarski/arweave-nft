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


  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      { address && <h1>Address: {address}</h1>}


    </div>
    
  );
}

export default HomePage;
