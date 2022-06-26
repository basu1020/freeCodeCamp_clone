import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="search-bar">
            <i className="fa fa-search search-bar__search-button"></i>
            <input type="search" className='search-bar__input' placeholder='Search 8000+ tutorials..' name='textinput'/>
        </div>
        <div className="logo">
            <h1 className='logo__name'>
            freeCodeCamp_clone
            </h1>
        </div>
        <div className="info">
            <button className='info__menu-btn'>Menu</button>
            <i class="fa-solid fa-fire"></i>
        </div>
    </nav>
    </>
  )
}

export default Navbar