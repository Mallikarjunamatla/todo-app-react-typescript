import React from 'react'
import styled  from 'styled-components'

const List = styled.li`
     
     display:flex ;
     justify-content: flex-start;
     background-color: #fff;
     color: #000;
     font-weight: bolder;
     align-items: center;
     margin-left: 20%;
     margin-right: 10%;
     overflow: scroll;
     border : 1px solid gray;
     border-radius: 3px;

     & #date  {
            margin-left: 5%;
     }

     & #content  {
           width: 70%;
           font-style: italic;
           justify-content: flex-start;
           word-wrap: break-word;

     }


     & #delete > {
            //visibility: hidden;
     }

     & #delete > img:hover{
            content: "delete";
            visibility: visible;
            background-color: red;
            z-index : 11;
     }

     & #mark > span{
           
           background-color: #060c0c;
           color: #fff;
           margin-left: 4% ;
           border-radius: 1em;
           padding: 4%;
           
    }
     & #mark > img:hover{
           
            background-color: #00f7ff;
            
     }


     & #actions{
            display: inline-flex;
            justify-content: flex-end;
            margin-left :50% ;
            
     }
   
     @media screen and (max-width : 768px){
         display : flex;
         flex-direction : column;
     }

   

`
const TodoItem :React.FC<{text : string ; date : Date ; completed : boolean ; removeHandler : () => void ; markAsComplete : () => void}> = (props) => {

//let options = { weekday<number> : 'long', year<number>: 'numeric', month<string>: 'long', day<number>: 'numeric' };

    let date ;

    if(typeof props.date === 'string'){
           date = new Date(props.date).toString();
    }
    else{
           date = props.date.toString();
    }



    return (
        <>
        <List  >
        <pre>      </pre>
            <div id="content">{props.text}</div>
            {/* <span> {props.date}</span> <pre>  </pre> */}
            <span id="date">{date}</span> 
           <span id="actions">
                <span data-testid="delete" id = "delete">
                    
                    <img src="close.svg"  alt="delete" style={{width : "25px"}} title="delete"  onClick={props.removeHandler}/>
                    
                </span>
                
                <span data-testid="mark" id = "mark">
                    
                  {props.completed  ? <span>completed</span> : <img src="checkmark.svg"  style={{width : "25px"}} alt="complete" title="mark as completed" onClick={props.markAsComplete}/>}
                </span>
           </span>
          
         
         
          
        </List>
        </>
    )
}

export default TodoItem
