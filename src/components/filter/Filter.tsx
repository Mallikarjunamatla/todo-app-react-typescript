import React, { useState } from 'react';
import Model from "../model/model"
import styled from 'styled-components';
import Todo from "../todo/Todo"




const Form = styled.div`
      position: relative;
      

      form{
          display: flex;
          justify-content: center;
          
      }
      form>input[type="text"]{
          width : 50%;
          height: 30px;
          border-radius: 5px;
          padding-left: 1%;
         margin: 2%;
      }
      form>input[type="submit"]{
          width : 13%;
          height: 30px;
          margin-left: 1%;
          border-radius: 5px;
          
      }


`;

const SearchTask = styled.div`
     margin-left : 20% ;
   
      width : 40%;
      height: fit-content;
       background-color: #23ad68;
       border-radius: 20%;
       font-size: medium;
       color: #fff;
      padding-left : 8%;

      @media screen and (max-width : 768px){
        margin-left : 20% ;
        margin-top: 2px;
       
        background-color: yellow;
        color: #000;
      }

`



const Filter : React.FC<{items : Model[]; removeHandler : (id : string)=> void ; markAsComplete : (id : string)=> void}>  = (props) => {
    
    const [filtered , setFiltered] = useState<Model[]>([]);
    const [enteredText, setEnteredText] = useState<string>("");


    const onChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setEnteredText(event.target.value)
        
            setFiltered(() => props.items.filter((item) => item.text.includes(event.target.value)))
            if(event.target.value.length===0){
                setFiltered([])
            }
           
       
        
    }

    

    return (
        <>
        <Form>
            <SearchTask>
            <h3>Search task</h3>
            </SearchTask>
            <form >
                <input  type="text" onChange={onChangeHandler}   placeholder="enter task name" />
            </form>
            
        </Form>
        <Todo items={filtered}  markAsComplete={props.markAsComplete} removeHandler={props.removeHandler} />
        </>
    )
}
export default Filter;
