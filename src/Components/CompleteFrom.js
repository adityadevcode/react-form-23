//sumbit form data to a server using the fetch method when user click submit button

import React, { useState } from 'react';

const CompleteFrom = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //handleSumbit function is called when the form is submitted
  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, age };

    // fetch method is used to send a psot request to the server at the url
    fetch('https://your-server-url.com/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    //   request body contains json
      headers: { 'Content-Type': 'application/json' },
    })
    // then method is called to handle the response from the server
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Clear form fields
        setName('');
        setAge('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Enter Your Name:
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          name="name"
          value={name}
        />
      </label>
      <br />
      <label htmlFor="age">
        Enter Your Age:
        <input
          onChange={(e) => setAge(e.target.value)}
          id="age"
          type="number"
          name="age"
          value={age}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompleteFrom;

// handling authentications and errors when submitting data to a server
// import React, { useState } from 'react';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [error, setError] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const data = { name, age };

//     // Retrieve the authentication token from local storage
//     // The authToken is then sent to the server with the request so that the server can verify the user's identity. 
//     // The server can check the token's validity and ensure that the user is authorized to access the server's resources.
//     const authToken = localStorage.getItem('authToken');

//     fetch('https://your-server-url.com/submit', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${authToken}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);

// // The first line of the function e.preventDefault(); is calling the preventDefault() method on the event object (e) passed to the function. This is used to prevent the browser's default behavior when a form is submitted, which is to reload the page.

// // The second line const data = { name, age }; is creating an object called data that contains the name and age entered by the user in the form. The name and age are the state variables which were updated when the user entered the data in the input fields.

// // The data object can be sent to the server using fetch method or another method to store the data in the database or perform other actions with it.
