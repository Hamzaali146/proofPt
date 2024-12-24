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
      console.log(prov)
      setHashData(prov)
  }
  
  useEffect(() => {
    ProviderEther()
  }, [])
  
  return (
    <>
      <Navbar siteName="proofPt."/>
      <div>
        <h1>Data from the Blockchain pipeline</h1><br />
      </div>
    </>
  )
}

export default App
