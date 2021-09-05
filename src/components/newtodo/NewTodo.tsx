import React, { useRef } from 'react';
import  styled from "styled-components"


const Form = styled.div`
      position: relative;
      margin : 3%;

      form{
          display: flex;
          justify-content: center;
      }
      form>input[type="text"]{
          width : 50%;
          height: 30px;
          border-radius: 5px;
          padding-left: 1%;
          @media screen and (max-width : 768px){
              width : 60%;
          }
      }
      form>input[type="submit"]{
          width : 13%;
          height: 30px;
          margin-left: 1%;
          border-radius: 5px;
          @media screen and (max-width : 768px){
              width : 20%;
          }
          
      }


`;


const AddTask = styled.div`
     margin-left : 20% ;
     
     margin-bottom: 1%;
      width : 40%;
      height: fit-content;
       background-color: #000;
       border-radius: 50%;
       font-size: medium;
       color: #fff;
      padding-left : 8%;

      @media screen and (max-width : 768px){
        margin-left : 20% ;
       
        background-color: #000;
      }

`

const NewTodo : React.FC<{ onAddTodo :(text : string) => void}> = (props) => {


       const todoInput = useRef<HTMLInputElement>(null);
       let enteredText="";
       const submitHandler  = (event : React.FormEvent) =>{
                     event.preventDefault();
                      enteredText = todoInput.current!.value;

                     if(enteredText.trim().length===0){
                         //throw an error;
                         return;
                     }
                     props.onAddTodo(enteredText);
                   //  console.log("Hiiiiii")
                   todoInput.current!.value="";
                 
       }

       const onClick = (event : React.MouseEvent) =>{
                            event.preventDefault();
                            todoInput.current!.value=""; 

       }
    return (
        <Form>
            <AddTask>
                  <h3 id="add-tasks"> Add Tasks</h3>
            </AddTask>
                <form onSubmit={submitHandler} >
                <input type="text" ref={todoInput}    placeholder="What task you want to add?"/>
                <input type="submit" value="Add task" />           
             </form>
        </Form>
            
        
    )
}

export default NewTodo
