import React, { useState } from 'react';
import Model from "../model/model"
import styled from 'styled-components';
import Todo from "../todo/Todo"


const Remain = styled.div`

   margin-top: 0;
   &>h2{
        margin-left: 5%;
        padding: 3%;
    }

`
const NoTasks = styled.div`

     width:30%;
     height: 30%;
     display: flex;
     flex-direction: column;
    margin : 10%;
    &>h2{
        margin-left: 5%;
    }

`





const TasksRemaining : React.FC<{items : Model[]; removeHandler : (id : string)=> void ; markAsComplete : (id : string)=> void}>  = (props) => {

    
   // const [remaining , setRemaining] = useState<Model[]>([]);
    


  
            
       const remaining = props.items.filter((item) => item.completed!==true)
       // console.log(remaining)
    

    return (
        <>
       { remaining.length !==0 ? 
        <Remain>
        <h2 data-testid="incomplete-heading">Incomplete Tasks !</h2>
        <Todo items={remaining}  markAsComplete={props.markAsComplete.bind} removeHandler={props.removeHandler} />
        </Remain> : 
        <NoTasks>
           <h3  data-testid="empty-tasks-heading"> You have empty tasks! Try adding tasks.</h3>
           <img src="warning-sharp.svg" alt=""  />
        </NoTasks>
       
       }
       </>

    )
}

export default TasksRemaining
