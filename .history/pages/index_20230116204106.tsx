import { useState } from "react";
import getContract from '../configureWarpClient'
import { useRouter } from "next/router";
function HomePage() {

  
  async function handleLogin() {
    const contract = await getContract();
    const address = await window.arweaveWallet.getActiveAddress();

  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
    
  );
}

export default HomePage;