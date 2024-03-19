import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/routes.css"

export default function MapFunction({desserts}) {
  const lowCalorieDesserts = desserts
  .filter((dessert) =>{ return dessert.calories < 500 })
  .sort((a, b) => {return a.calories - b.calories})
  ?.map((dessert) => {
    return (
      <li className="p-2">
        {dessert.name} - {dessert.calories} cal
      </li>
    )
  })

  return (
    <div>
      <Link to="/routes/first" className='route-button'>First</Link>
      <Link to="/routes/second" className='route-button'>Second</Link>
      <Link to="/routes/third" className='route-button'>Third</Link>
    </div>
  )
}