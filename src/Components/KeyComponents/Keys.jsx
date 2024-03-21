import { useState } from "react";
import "./keyscss.css"


const ToDo = (props) => (
    <tr className="todo-table-row">
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
            createdAt : '11:55' 
        }]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }
    return (
        <div className="keys-main-container">
            <table>
                <tbody>
                    {todos?.map((todo) => (
                        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
                    ))}
                </tbody>
            </table>
            <div className="todo-button-container">
                    <button onClick={reverseOrder}>Reverse</button>
            </div>
        </div>
    )
}