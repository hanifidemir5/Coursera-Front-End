  
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
        {lowCalorieDesserts}
      </ul>
    </div>
    )
};

  