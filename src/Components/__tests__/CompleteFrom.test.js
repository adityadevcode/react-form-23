import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CompleteFrom from '../CompleteFrom';



describe('handleSubmit', () => {
    it('should send form data to the server', () => {
      // Set up the form data
      const name = 'John Doe';
      const age = 30;
      setName(name);
      setAge(age);
  
      // Spy on the fetch method
      const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation();
  
      // Call the handleSubmit function
      handleSubmit();
  
      // Check that the fetch method was called with the correct arguments
      expect(fetchSpy).toHaveBeenCalledWith(
        'https://your-server-url.com/submit',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ name, age }),
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: 'Bearer my-secret-token',
          }),
        })
      );
  
      // Reset the fetch spy
      fetchSpy.mockRestore();
    });
  
    it('should display an error message on failed submission', () => {
      // Spy on the alert function
      const alertSpy = jest;
    });
  
    // Reset the alert spy
    alertSpy.mockRestore();
  });

  it('should set error state on failed submission', () => {
    // Set up the fetch method to return a failed response
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({ ok: false, statusText: 'Error' })
    );

    // Call the handleSubmit function
    handleSubmit();

    // Check that the error state was set
    expect(error).toEqual('Error');
  });

  it('should clear form fields after successful submission', () => {
    // Set up the fetch method to return a successful response
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({ ok: true })
    );

    // Call the handleSubmit function
    handleSubmit();

    // Check that the form fields were cleared
    expect(name).toEqual('');
    expect(age).toEqual('');
  });



// /////////////////////////////rtl
import { render, fireEvent } from '@testing-library/react';

describe('Form', () => {
  it('should submit form data', () => {
    const { getByLabelText, getByText } = render(<Form />);

    // fill the form
    const nameInput = getByLabelText('Enter Your Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const ageInput = getByLabelText('Enter Your Age:');
    fireEvent.change(ageInput, { target: { value: '30' } });

    // submit the form
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    // check if the form data was sent
    expect(fetch).toHaveBeenCalledWith(
       'https://your-server-url.com/submit',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ name: 'John Doe', age: '30' }),
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          Authorization: 'Bearer my-secret-token',
        }),
      })
    );
  });

  it('should display an error message on failed submission', () => {
    // set up the failed response
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({ ok: false, statusText: 'Error' })
    );

    // render the form
    const { getByLabelText, getByText } = render(<Form />);

    // fill the form
    const nameInput = getByLabelText('Enter Your Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const ageInput = getByLabelText('Enter Your Age:');
    fireEvent.change(ageInput, { target: { value: '30' } });

    // submit the form
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    // check if an error message was displayed
    expect(global.alert).toHaveBeenCalledWith('Error submitting data');
  });

  it('should set error state on failed submission', () => {
    // set up the failed response
    global.fetch.mockImplementationOnce(() =>
      Promise
      expect(error).toEqual('Error');
    });
  
    it('should clear form fields after successful submission', () => {
      // set up the successful response
      global.fetch.mockImplementationOnce(() =>
        Promise.resolve({ ok: true })
      );
  
      // render the form
      const { getByLabelText, getByText } = render(<Form />);
  
      // fill the form
      const nameInput = getByLabelText('Enter Your Name:');
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  
      const ageInput = getByLabelText('Enter Your Age:');
      fireEvent.change(ageInput, { target: { value: '30' } });
  
      // submit the form
      const submitButton = getByText('Submit');
      fireEvent.click(submitButton);
  
      // check if the form fields were cleared
      expect(nameInput.value).toEqual('');
      expect(ageInput.value).toEqual('');
    });
  
    afterEach(() => {
      // clear the mock implementations and the form state
      global.fetch.mockClear();
      setName('');
      setAge('');
      setError(null);
    });
  });
