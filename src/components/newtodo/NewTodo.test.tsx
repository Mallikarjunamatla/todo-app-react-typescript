import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import NewTodo from './NewTodo';
describe("<NewTodo />",  () => {
 
    test("New Todo Renders correctly", () =>{

        const onAddTodo : (text : string) => void = jest.fn();
            render(<NewTodo onAddTodo={onAddTodo}/>)
            
         //qq  screen.debug()
         expect(screen.getByText(/add tasks/i) ).toBeInTheDocument();
       

    })



    test("Should add new todo to the list of tasks", () =>{

        const onAddTodo : (text : string) => void = jest.fn();
            render(<NewTodo onAddTodo={onAddTodo}/>)
            
         //qq  screen.debug()
            userEvent.type(screen.getByRole("textbox"),"Task two");
            userEvent.click(screen.getByRole("button"));

         
            expect(onAddTodo).toHaveBeenCalledTimes(1);
       

    })


    test("Add new todo to the list of tasks", () =>{

        const onAddTodo : (text : string) => void = jest.fn();
            render(<NewTodo onAddTodo={onAddTodo}/>)
            
         //qq  screen.debug()
            userEvent.type(screen.getByRole("textbox"),"Task two");
            userEvent.click(screen.getByRole("button"));
            userEvent.click(screen.getByRole("textbox"));
            // screen.debug()

                           // screen.getByRole("textbox")
            expect(screen.getByRole("textbox")).not.toHaveValue("task two");
       

    })

})
