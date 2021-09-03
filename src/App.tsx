import React from 'react';
import NewTodo from './components/newtodo/NewTodo';
import Todo from './components/todo/Todo';
import { useState, useEffect } from 'react';
import Model from "./components/model/model";
import Filter from './components/filter/Filter';
import styled from 'styled-components';
import TasksRemaining from './components/tasksremaining/TasksRemaining';

const Container = styled.div`


  & > header {
    
     // margin-left: 10% ;
    //  margin-right: 30%;
   //  margin-top:3%;
   display: flex;
 //  align-items:center;
  // justify-content: space-between;
   border : 2px solid darkgray;
      background-color: #fff;
      //border-radius: 100px;
   // justify-content: center;
   // padding-left:10%
     
    h1{
      margin-left: 10%;
    }
   & > div{

    display: flex;
    width : 50%;
    margin-left: 5%;
    align-items: center;
    justify-content: space-around;
    
    span{
       margin-left: 1%;
       border-radius: 5%;
    }
         
    &> #home:hover{
      
        background-color: rgb(64, 236, 58);
        cursor: pointer;
        border-radius: 555%;
      
    } 
    &> #search:hover{
      
      background-color: #ecdbdb;
      cursor: pointer;
      border-radius: 555%;
    
  } 
    
    & > #incomplete{
       background-color: yellow;
       border-radius: 555%;
       cursor: pointer;
    }
    & > #incomplete:hover{
       background-color: lightgray;
       border-radius: 555%;
       cursor: pointer;
    }
   
    & > #delete:hover{
       background-color: #eba0a0;
       border-radius: 555%;
       cursor: pointer;
    }


   }
   

  }
`;

const Search = styled.div`
    width: 100%;
    height: 100vh;
   color : #000;
   margin-top : 0 ;
    background-color: #39acc952;
  

`

const Remain = styled.div`
    width: 100%;
    height: 100vh;
   color : #000;
   top : 0 ;
   z-index : 98;
    background-color: Yellow;

`


function App() {

    const [todoArray , setTodoArray]= useState<Model[]>([]);
   // const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [incomplete, setIncomplete] = useState<boolean>(false);
   // const [clearAll , setClearAll] = useState<boolean>(false)
    //const [incompleteTasks, setIncompleteTasks] = useState<Model[]>([]);



    
    


    useEffect(() => {
     function data() {
     // setLoading(true);
      const itemsArray =   localStorage.getItem("items");
     // setLoading(false)
      if(itemsArray){
        setTodoArray(JSON.parse(itemsArray))
      }
     // console.log(todoArray)
      }
      data();
     

 },[]);


    useEffect(() => {
      // const storedItems = localStorage.getItem("items");
      // setTodoArray(storedItems);
      
        localStorage.setItem("items", JSON.stringify(todoArray) );
       // console.log(todoArray)
              
     },[todoArray])


  




    
  
    

    const addTodoHandler = ( text : string) =>{

      const TodoModel = new Model(text);

      setTodoArray((preTodos) => {
       return  preTodos.concat(TodoModel);
      })
    }


    const removeHandler = (id : string) =>{
      const yes =  window.confirm("Do yo want to delete task permanently?")
      if(yes){
        setTodoArray((prevTodo) => {
          return prevTodo.filter((item) => item.id!==id);
        }
        )
      }
     
    }


    const markAsComplete =( id : string) => {

      const yes =  window.confirm("Do yo want to mark task as completed?")

              if(yes){
                  
                const itemsArray = [...todoArray];
                const index = itemsArray.findIndex(item => item.id === id);
                itemsArray[index].completed = true;
                //this.setState({data});
                setTodoArray(itemsArray);
                

              }

 }
      const searchHandler = (event : React.MouseEvent) =>{
          event.preventDefault();

          setSearch((prevState) => !prevState);
          setIncomplete(false);

      } 

      const incompleteHandle = (event : React.MouseEvent) =>{
        event.preventDefault();

        setIncomplete((prevState) => !prevState);
        setSearch(false);

    } 

   
  const clearAllTasks = (event : React.MouseEvent) =>{
            event.preventDefault();

            
           // setClearAll((prev) => !prev);
           if(todoArray.length !==0 ){
            const clearFlag =window.confirm("Do you want to clear all tasks?");
                if(clearFlag){

                  localStorage.clear();
                  setTodoArray([]);
                }
               

           }
           else{
            window.confirm("You have empty tasks to clear!");

           }
           
           // setClearAll((prev) => !prev);

  }
  const todoHomePage = (event : React.MouseEvent) =>{
              event.preventDefault();
              setSearch(false);
              setIncomplete(false);
  }
       

      
   


    

  

  return (
  
    <Container>
         <header data-testid="header">
                  <h1 data-testid="heading">Todo</h1>
                  <div>
                    <span id="home" data-testid="home" onClick={todoHomePage}> <img src="home.svg"  title="Home" style={{width : "25px", height : "25px"}} alt="" /> </span>
                    <span id="search"  data-testid="search" onClick={searchHandler}><img src="search.svg"  title ="search task" style={{width : "25px", height : "25px"}}></img></span>
                    <span id="delete"  data-testid="delete" onClick={clearAllTasks}>  <img src="delete.svg" title="Clear all tasks" style={{width : "25px", height : "25px"}}></img></span>
                    <span   data-testid="incomplete"  onClick = {incompleteHandle} id="incomplete"> <img src="warning-sharp.svg" title="Incomplete tasks" style={{width : "25px", height : "25px"}}></img></span>

                  </div>
                  
        </header>

       
         { !search && 
          <>
                {!incomplete ?
                <>
                
               
                <NewTodo onAddTodo={addTodoHandler}/>
                <Todo items={todoArray}  markAsComplete={markAsComplete} removeHandler={removeHandler} /> 
                </>:
                <TasksRemaining items={todoArray}  markAsComplete={markAsComplete} removeHandler={removeHandler}  />} 

          </>

         }       
      {search &&  <Search>
                  <Filter items={todoArray} markAsComplete={markAsComplete} removeHandler={removeHandler} />
                 
                </Search> } 


      
    </Container>
  
  );
}

export default App;
