import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/learn")
  }

  return (
    <>
      <div className='body home'>
        <h2> Welcome to freeCodeCamp_clone</h2>
        <h2>Code to earn </h2>
        <h2>Receive your certifications in NFT</h2>
        <div className="homeImgContainer">
        <img className='homeImage' src="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="coding" />
        </div>
        <button onClick={onClick}> Let's Get Started </button>
      </div>
    </>
  )
}

export default Home

/*
home 
    |--> learn --> python
               --> javascript
               --> React 
               --> Data visualisation
               --> Solidity 
               --> Backend with Node
               --> Information Seurity Certification
               --> Machine Learning Certification     
    */