import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
describe("<App />",  () => {

  test('Should output heading text "Todo"',  () => {
    render(<App />);
    const linkElement = screen.getByText(/Todo/, {exact:true});
    //screen.debug()
    expect(linkElement).toBeInTheDocument();
    
  });


  test('should add entered task to task list',  () => {
    render(<App />);

    fireEvent.change(screen.getByRole("textbox"), {target : {value : "Todo Task"}});
    fireEvent.click(screen.getByRole("button"));

    //screen.debug()
    expect(screen.getByText(/todo task/i)).toBeInTheDocument();
    
  });



  test('should add  user entered task to task list',  () => {
    render(<App />);

    userEvent.type(screen.getByRole("textbox"),"Task one")
    userEvent.click(screen.getByRole("button"))

   // screen.debug()
    expect(screen.getByText(/task one/i)).toBeInTheDocument();
    
  });


  test('should display Home page after clicking  "Home icon"',  () => {

     const { getByTestId }   =   render(<App />)
                 
    userEvent.click(getByTestId("home"))

    //screen.debug()
    expect(screen.getByText(/add tasks/i)).toBeInTheDocument();
    
  });

  test('should display search page after clicking  "Search icon"',  () => {

    const { getByTestId }   =   render(<App />)
                
   userEvent.click(getByTestId("search"))

   //screen.debug()
   expect(screen.getByText(/search task/i)).toBeInTheDocument();
   
 });





 test('should display incomplete tasks page after clicking  "Warning icon"',  () => {

  const { getByTestId }   =   render(<App />)
              
 userEvent.click(getByTestId("incomplete"))

 //screen.debug()
 expect(screen.getByText(/incomplete tasks/i)).toBeInTheDocument();
 
});


test('should display Home page',  () => {

  const { getByTestId }   =   render(<App />)
              
 userEvent.click(getByTestId("incomplete"))
 userEvent.click(getByTestId("incomplete"))

 //screen.debug()
 expect(screen.getByText(/add tasks/i)).toBeInTheDocument();
 
});



test('should display Home page after multiple clicks and vice-versa',  () => {

  const { getByTestId }   =   render(<App />)
              
 userEvent.click(getByTestId("search"))
 userEvent.click(getByTestId("search"))

 //screen.debug()
 expect(screen.getByText(/add tasks/i)).toBeInTheDocument();
 
});


test('should display Home',  () => {

  const { getByTestId }   =   render(<App />)
              
 userEvent.click(getByTestId("search"))
 userEvent.click(getByTestId("incomplete"))
 userEvent.click(getByTestId("incomplete"))


 //screen.debug()
 expect(screen.getByText(/add tasks/i)).toBeInTheDocument();
 
});




// test('should call clear all',  () => {

//   const { getByTestId }   =   render(<App />)
//   global.confirm = jest.fn(() => true);
//  userEvent.click(getByTestId("delete"))



//  //screen.debug()
//  expect(global.confirm).toBeCalled();
 
// });




  


})
