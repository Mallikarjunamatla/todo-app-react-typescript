import React from 'react'
import Model from "../model/model";
import TodoItem from '../todoitem/TodoItem';

const Todo : React.FC<{items : Model[]; removeHandler : (id : string)=> void ; markAsComplete : (id : string)=> void}>  = (props) => {
   
    return (
        <div>
            <ul>
            {props.items.map((item) => <TodoItem text={item.text} date={item.date} key={item.id} completed={item.completed}  markAsComplete={props.markAsComplete.bind(null,item.id)} removeHandler={props.removeHandler.bind(null,item.id)} > 
            </TodoItem>)}
            </ul>
            
        </div>
    )
}

export default Todo
