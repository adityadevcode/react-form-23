import React, {useState} from 'react';

const Form = () => {
const[name, setName] = useState("");
const[age, setAge] = useState("");

function handleSumbit() {
    alert("your name is " + name +" and you are " + age + " years old");
}

  return (
    <form onSubmit={handleSumbit}>
       <label htmlFor="name">
       Enter Your Name:
       <input
        onChange={(e)=>setName(e.target.value)} 
        id="name" 
        type="text"
         name="name" 
         value={name}/>
       </label>
       <br></br>
      <label htmlFor="age">
        Enter Your Age:
        <input 
        onChange={(e)=>setAge(e.target.value)} 
        id="age"
         type="number" 
         name="age" 
         value={age}/> 
      </label>
      <br></br>
      <button  className="sumbit-button" type="sumbit">Sumbit</button>
    </form>
  )
}

export default Form;