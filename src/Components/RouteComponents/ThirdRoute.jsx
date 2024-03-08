import React from 'react'
import { Link } from 'react-router-dom';
function ThirdRoute() {
  return (
    <div className='flex flex-col align-middle text-center justify-center'>
      <h1 >Third Route</h1>
      <Link to="/routes" className='bg-black text-white rounded-md p-2 m-2'>Back</Link>
    </div>
  )
}
export default ThirdRoute;