import React from 'react'

const Header = () => {
  return (
    <div className="container d-flex justify-content-around  bg-dark fs-4 py-1">
        <div className="logo_name">
            <span className='text-white mx-4'>Start Bootstrap
            </span>
        </div>
        <div className="menu">
            <a className='mx-2 text-decoration-none text-white ' href="#">Home</a>
            <a className='mx-2 text-decoration-none text-white 'href="#">About</a>
            <a className='mx-2 text-decoration-none text-white 'href="#">Services</a>
            <a className='mx-2 text-decoration-none text-white ' href="#">Contact</a>
        </div>
    </div>
)
}

export default Header