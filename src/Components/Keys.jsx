import { useState } from "react";

const ToDo = (props) => (
    <tr className="flex space-x-2 items-center text-center">
        <td>
            <label >{props.id}</label>
        </td>
        <td>
            <input type="text"/>
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);

export default function Keys() {
    const [todos,setTodos] = useState([{
            id: 'todo1',
            createdAt : '23:38'
        }, {
            id: 'todo2',
            createdAt : '23:55' 
        }]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }
    return (
        <div className="flex flex-col justify-center">
            <table>
                <tbody className="flex flex-col space-y-2">
                    {todos?.map((todo) => (
                        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-col">
                    <button onClick={reverseOrder}>Reverse</button>
            </div>
        </div>
    )
}