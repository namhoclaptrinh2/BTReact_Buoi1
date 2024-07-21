import React from 'react'

const Banner = () => {
  return (
    <div className=" container p-4  w-75 m-auto">
        <h1 className='display-1 strong'>A war welcome!</h1>
        <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <button className='btn btn-primary'>Call to action</button>
    </div>
  )
}

export default Banner