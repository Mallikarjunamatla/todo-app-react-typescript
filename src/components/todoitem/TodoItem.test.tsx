import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Model from "../model/model"
import userEvent from '@testing-library/user-event';
import TodoItem from './TodoItem';
describe("<TodoItem />",  () => {
 
    test("TodoItem renders correctly", () =>{

       const text =  "sometext";
       const date = new Date();
       const completed = false;
        const  removeHandler: () => void = jest.fn();
        const   markAsComplete: () => void = jest.fn();
    
  
        render(<TodoItem text={text} date ={date} completed= {completed} removeHandler = {removeHandler} markAsComplete={markAsComplete}  />)

     expect(screen.getByText(/sometext/i)).toBeInTheDocument()
       

    })


//     test("should delete an item upon clicking delete", () =>{

        
//         const text =  "sometext";
//         const date = new Date();
//         const completed = false;
//          const  removeHandler: () => void = jest.fn();
//          const   markAsComplete: () => void = jest.fn();
     
//         // window.confirm = jest.fn(() => true)

//          const { getByTestId } = render(<TodoItem text={text} date ={date} completed= {completed} removeHandler = {removeHandler} markAsComplete={markAsComplete}  />)
//         // global.confirm = () => true;
//          fireEvent.click(getByTestId("delete"))

//          // always click 'yes'

// // run your test code here

//         // expect(getByTestId("delete")).toBeCalled()
           
//          expect(removeHandler).toHaveBeenCalledWith(1)
         
        
 
//      })


    




   

})
