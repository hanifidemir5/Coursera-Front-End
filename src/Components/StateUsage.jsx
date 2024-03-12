import { useRef, useState } from "react"; 
 
function GoalForm(props){
  const [formData,setFormData] = useState({ goal: "", by: "" });
  const goalRef = useRef(null)

  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function submitHandler(e){
    e.preventDefault();
    if(formData.goal == "" || formData.by == "") {
      alert("You have to fill the required fields!!");
    }
    else{
      props.onAdd(formData);
      setFormData({ goal: "", by: "" })
    }
    goalRef.current.focus();
  }

  return (
    <>
      <h1 className="text-3xl">
        Goal List
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex flex-row space-x-2 h-8 ">
          <input type="text" name="goal" placeholder="Goal.." value={formData.goal} onChange={changeHandler} ref={goalRef}/>
          <input type="text" name="by" placeholder="by.." value={formData.by} onChange={changeHandler}/>
        </div>
        <div className="justify-end flex">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span className="text-2xl space-y-6"> My goal is to {g.goal}, by {g.by} </span>
        </li>
      ))}
    </ul>
  )
}

function BasicState(){
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 

  return (
    <div className=" flex flex-col justify-center"> 
      <h1 className="self-center text-3xl">{greeting.greet}</h1> 
      <button onClick={updateGreeting} className="max-w-32 self-center">Update greeting</button> 
    </div> 
  )

}

export default function StateUsage() { 
  const [allGoals,updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }
 
  return ( 
    <div >
      <div className="space-y-3 lg:min-w-[600px]">
        <BasicState/>
        <GoalForm onAdd={addGoal} />
        <ListOfGoals allGoals={allGoals}/>
      </div> 
    </div>
  ); 
} 


