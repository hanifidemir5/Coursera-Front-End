  
import { Link } from 'react-router-dom';
import { navDatas } from '../Datas/NavbarQueryset.js';

export default function MapFunction({desserts}){
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
      <ul className="text-4xl">
          { navDatas.map((data) => (
            data.subRoutes 
            ? 
            <div key={data.text} to={data.link} className='flex gap-6 justify-center flex-wrap'>
                  {
                    data.subRoutes.map((route) => {
                      return(
                        <Link key={route.title} to={route.to} className='p-4 hover:bg-slate-300'>{route.title}</Link>
                      )
                    })
                  }
            </div>
            :
            <Link key={data.text} to={data.link} >
                  {data.text}
            </Link>
          ))}
      </ul>
    </div>
    )
};

  