import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Useeffect from '../Useeffect';


describe('Useeffect', () => {
  it('should render the initial count and calculation', () => {
    const { getByText } = render(<Useeffect />);
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });

  it('should increment the count when the "Count Increment" button is clicked', () => {
    const { getByText } = render(<Useeffect />);
    fireEvent.click(getByText('Count Increment'));
    expect(getByText('1')).toBeInTheDocument();
  });

  it('should decrement the calculation when the "Count Decrement" button is clicked', () => {
    const { getByText } = render(<Useeffect />);
    fireEvent.click(getByText('Count Decrement'));
    expect(getByText('-1')).toBeInTheDocument();
  });
});


// Note that in this example, getByText is used to find elements by their text content. 
// Additionally, the fireEvent is used to simulate the click event on button.

// Also, in the test cases, the className is not being used, if you need to test the 
// className you can use getByTestId or getByRole along with the className.