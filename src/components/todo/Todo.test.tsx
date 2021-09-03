import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Model from "../model/model"
import userEvent from '@testing-library/user-event';
import Todo from './Todo';
describe("<Todo />",  () => {
 
    test("Todo renders correctly", () =>{

        const items : Model[] = [ {id :"123", text : "text", date : new Date() , completed : false}];
        const  removeHandler: (id: string) => void = jest.fn();
        const   markAsComplete: (id: string) => void = jest.fn();
    
  
        render(<Todo removeHandler={removeHandler} markAsComplete={markAsComplete}  items={items} />)

       // expect(screen.getByText(/incomplete tasks/i)).toBeInTheDocument()
       

    })







   

})
