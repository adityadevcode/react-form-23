// These test cases use the render and fireEvent functions from the @testing-library/react library to render the Form component and simulate user interactions.
// The getByLabelText and getByText functions are used to locate the name and age inputs and the submit button in the rendered markup.
// The mockAlert function is used to capture the call to the alert function so that it can be asserted against.
// You can add more test cases to cover more scenarios.

// The first test case it('should display an alert with the entered name and age when the form is submitted', () => { is testing that when the form is submitted, an alert with the entered name and age is displayed.

// First, the render function is used to render the Form component. The getByLabelText and getByText functions are then used to locate the name and age inputs and the submit button in the rendered markup. This is done so that the test can simulate user interactions with the form by changing the values of the inputs and clicking the submit button.
    
// The mockAlert function is then used to capture the call to the alert function so that it can be asserted against. The mockAlert function is assigned to the window.alert so that the real alert function is overridden with the mock function.
    
// Next, the fireEvent.change function is used to simulate the user changing the values of the name and age inputs. The fireEvent.click function is then used to simulate the user clicking the submit button.
    
// Finally, the expect(mockAlert).toHaveBeenCalledWith is used to assert that the mockAlert function was called with the correct arguments, in this case 'your name is John and you are 25 years old'. If the alert is displayed with the correct name and age, then the test will pass.
    
// The second test case is similar to the first one, only difference is the values entered in the form fields, here the test is checking the case when the name is 'Amy' and age is '30'
    
// These test cases will check that the form is working as expected and will fail if the form does not display the alert with the entered name and age when the form is submitted.
    
// You can also write test cases to check for different scenarios like checking if the values entered in the fields are empty, if the values entered are not numbers if expected and so on.


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../Form';


describe('Form', () => {
  it('should display an alert with the entered name and age when the form is submitted', () => {
    // Arrange
    const { getByLabelText, getByText } = render(<Form />);
    const nameInput = getByLabelText('Enter Your Name:');
    const ageInput = getByLabelText('Enter Your Age:');
    const submitButton = getByText('Sumbit');
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    // Act
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(ageInput, { target: { value: '25' } });
    fireEvent.click(submitButton);

    // Assert
    expect(mockAlert).toHaveBeenCalledWith('your name is John and you are 25 years old');
  });

  it('should display an alert with the entered name and age when the form is submitted', () => {
    // Arrange
    const { getByLabelText, getByText } = render(<Form />);
    const nameInput = getByLabelText('Enter Your Name:');
    const ageInput = getByLabelText('Enter Your Age:');
    const submitButton = getByText('Sumbit');
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    // Act
    fireEvent.change(nameInput, { target: { value: 'Amy' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.click(submitButton);

    // Assert
    expect(mockAlert).toHaveBeenCalledWith('your name is Amy and you are 30 years old');
  });
});
