import React from 'react'
import { Link } from 'react-router-dom';
import "../../assets/css/routes.css"

function ThirdRoute() {
  return (
    <div className='child-route-container'>
      <h1 className='route-header'>Third Route</h1>
      <Link to="/routes" className='route-button'>Back</Link>
    </div>
  )
}
export default ThirdRoute;