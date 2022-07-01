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
        <h3>Courses to get you started (Sign in to track your progress)</h3>
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