import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Filter from './Filter';
import Model from "../model/model"
import userEvent from '@testing-library/user-event';
describe("<Filter />",  () => {
 
    test("Filtering tasks component renders correctly", () =>{

       
            const items : Model[] = [ {id :"123",text : "text", date : new Date() , completed : false}];
            const  removeHandler: (id: string) => void = jest.fn();
            const   markAsComplete: (id: string) => void = jest.fn();
        
      
            render(<Filter removeHandler={removeHandler} markAsComplete={markAsComplete}  items={items} />)
            
         //qq  screen.debug()
            expect(screen.getByText(/search task/i) ).toBeInTheDocument();
       

    })



    test("Should display correct search result  ", () =>{

        const items : Model[] = [ {id :"123",text : "text", date : new Date() , completed : false}];
        const  removeHandler: (id: string) => void = jest.fn();
        const   markAsComplete: (id: string) => void = jest.fn();
    
  
        render(<Filter removeHandler={removeHandler} markAsComplete={markAsComplete}  items={items} />)
        
     //qq  screen.debug()
        userEvent.type(screen.getByRole("textbox"),"text")
        expect(screen.getByText(/text/i) ).toBeInTheDocument();
       

    })


    test("Should clear input field  ", () =>{

        const items : Model[] = [ {id :"123",text : "text", date : new Date() , completed : false}];
        const  removeHandler: (id: string) => void = jest.fn();
        const   markAsComplete: (id: string) => void = jest.fn();
    
  
        render(<Filter removeHandler={removeHandler} markAsComplete={markAsComplete}  items={items} />)
        
     //qq  screen.debug()
        userEvent.type(screen.getByRole("textbox"),"text")
        userEvent.clear(screen.getByRole("textbox"))

        expect(screen.queryByText(/text/i) ).toBeNull();
       

    })

})
