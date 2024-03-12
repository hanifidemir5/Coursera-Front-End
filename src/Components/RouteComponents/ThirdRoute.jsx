import React from 'react'
import { Link } from 'react-router-dom';
function ThirdRoute() {
  return (
    <div className='flex items-center flex-col'>
      <h1 >Third Route</h1>
      <Link to="/routes" className='bg-black text-white rounded-md p-4 m-4'>Back</Link>
    </div>
  )
}
export default ThirdRoute;