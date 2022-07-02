import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const onClickSignIn = () => {
   navigate("/sign-up") 
  }

  const onClickDirectHome = () => {
    navigate("/")
  }

  return (
    <>
    <nav>
        <div className="search-bar">
            <i className="fa fa-search search-bar__search-button"></i>
            <input type="search" className='search-bar__input' placeholder='Search 8000+ tutorials..' name='textinput'/>
        </div>
        <div className="logo">
            <h1 className='logo__name' onClick={onClickDirectHome}>
            freeCodeCamp_clone
            </h1>
        </div>
        <div className="info">
            <button className='info__menu-btn'>Menu</button>
            <button className="info__menu-btn" onClick={onClickSignIn}>Sign in</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar