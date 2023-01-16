import { useState } from "react";
import getContract from '../configureWarpClient'
import { useRouter } from "next/router";
function HomePage() {

  
  async function handleLogin() {
    const contract = await getContract();
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
    
  );
}

export default HomePage;
