import { useState } from "react";
import getContract from '../configureWarpClient'
import { useRouter } from "next/router";
function HomePage() {
const contract = await getContract()

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
