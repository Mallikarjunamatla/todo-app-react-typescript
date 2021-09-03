import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Model from "../model/model"
import userEvent from '@testing-library/user-event';
import TasksRemaining from './TasksRemaining';
describe("<TasksRemaining />",  () => {
 
    test("Tasks remaining renders correctly", () =>{

        const items : Model[] = [ {id :"123", text : "text", date : new Date() , completed : false}];
        const  removeHandler: (id: string) => void = jest.fn();
        const   markAsComplete: (id: string) => void = jest.fn();
    
  
        render(<TasksRemaining removeHandler={removeHandler} markAsComplete={markAsComplete}  items={items} />)

        expect(screen.getByText(/incomplete tasks/i)).toBeInTheDocument()
       

    })


    test("should display empty tasks alert", () =>{

        const items : Model[] = [ ];
        const  removeHandler: (id: string) => void = jest.fn();
        const   markAsComplete: (id: string) => void = jest.fn();
    
  
        render(<TasksRemaining removeHandler={removeHandler} markAsComplete={markAsComplete}  items={items} />)

        expect(screen.getByText(/you have empty tasks/i)).toBeInTheDocument()
       

    })




   

})
