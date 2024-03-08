import { useState } from "react";

const ToDo = (props) => (
    <tr>
        <td>
            <label >{props.id}</label>
        </td>
        <td>
            <input />
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
        <div className="flex flex-col">
            <table>
                <tbody>
                    {todos?.map((todo) => (
                        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
                    ))}
                </tbody>
            </table>
            <button onClick={reverseOrder} className="flex-1 self-end">Reverse</button>
        </div>
    )
}