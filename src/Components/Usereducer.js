// useReducer hook accepts 2 arguments
// first one is reducer function and second one is initial state
// useReducer(reducer,initialState);
//it gives the state variable and dispatch function
// const{state,dispatch}= useReducer(reducer,initialState);
// it work similiar to the use state hook, the state will hold initial data from the initial(state)
// and the reducer method will take the current state and action parameter and return new state
// finally dispatch method is used update state variable

// useReducer(reducer, initialState);
// const{state,dispatch}=useReducer(reducer, initialState);
// const reducer((state,action)=> {
//     return state;
// })

// use reducer hook is used to manage state and handle state updates in a functional component. 
// It takes two arguments: a reducer function and an initial state
//  reducer function is a pure function that takes the current state and an action, and returns a new state based on the action. 




import React, {useReducer} from "react";

function Usereducer() {
    // creating reducer method which contain parameters current state and parameters
    function reducer(state, action) {
        if(action.type === "INCREMENT") {
            return state + 1;
        }
        return state;//return defualt state
    }

    const initialState = 0;
    const [state, dispatch] = useReducer (reducer, initialState);

    // we can pass data to reducer or no need to pass data reducer
    //we dont need second data inside the obj
    // if we want to pass some data to reducer function we need to use payload
return (
    <>
    <h3>Use Reducer hook</h3>
    <h3>{state}</h3>
    {/* button on evry click we need to use dispatch method that will take an object*/}
    <button onClick={() => dispatch({type: "INCREMENT"})}> Count</button>
    </>
);
}

export default Usereducer;

// redux which state management package it has pretty much idea has usereducer hook