import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import { ethers, providers } from 'ethers'

function App() {
  const [count, setCount] = useState(0)
  const [hashData, setHashData] = useState([])
  function ProviderEther(){
      let prov = new ethers.providers.Web3Provider(window.ethereum)
      window.ethereum.request({
    method: "eth_chainId",
    params: [],
  }).then((data)=>{
    console.log(data);
    
  })
      console.log(prov)
      setHashData(prov)
  }
  
  useEffect(() => {
    // ProviderEther()
    if(typeof window.ethereum === 'undefined'){
      alert("please install metamask!")
    }else{
      // alert("metamask is installed")
      ProviderEther()
    }
  }, [])
  
  return (
    <>
    <div className="h-[80vh] relative">
    <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./bg-hero.jpg')" }}
    ></div>
    <div className="relative">
        <Navbar siteName="proofPt." />
        <div className="container mx-auto">
          <div>
            <p className='text-white font-medium herotxt text-8xl my-9 mx-3 mb-2'>EMPOWERING TRUST WITH BLOCKCHAIN TECHNOLOGY</p>
            <p className='herotxtSub text-white ml-6 text-2xl tracking-wide'>Secure. Verify. Simplify.</p>
          </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default App
