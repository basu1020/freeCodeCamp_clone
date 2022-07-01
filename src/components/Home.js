import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/learn")
  }

  return (
    <>
      <div className='body'>
        <h2> Welcome to freeCodeCamp_clone</h2>
        
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