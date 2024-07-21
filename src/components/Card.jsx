import React from 'react'

const Card = () => {
  return (
    // <div className="row">
    //     <div className="col-3 text-center py-5">
    //        <img src="/src/assets/img/anhCho.jpg" alt="..."  className='w-100 h-50'/>
    //        <h2>Card title</h2>
    //        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit possimus sunt!</p>
    //        <hr />
    //        <button className='btn btn-primary'>Find out more</button>
    //     </div>
    // </div>

//     <div className='card bg-secondary'>
//     <div className='card-header  bg-dark text-white'></div>
//     <div className='card-body'>
//         Content card
//     </div>
// </div>

        <div className="container text-center  w-100">
           <img src="/src/assets/img/anhCho.jpg" alt="..."  className='w-100 '/>
           <h3 className='p-2'>Card title</h3>
           <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit possimus sunt!</p>
           <div className="bg bg-light">
           <button className='btn btn-primary my-3'>Find out more</button>
           </div>
           
        </div>
   
  )
}

export default Card