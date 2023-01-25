// define the reducer function
// Initialize the state with the useReducer hook

import React, {useReducer} from 'react';

// define the reducer function
const reducer =(state, action) => {
    switch(action.type){
        case 'increment':
            return {count:state.count +1};
            case 'decrement':
                return {count:state.count -1};
                default:
                    return state;
    }
};

 const Usereducerpt1 =() => {
    // intialize the state with the usereducer hook
    const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <div className="counter">
   <h3>Usereducerpt1</h3> 
   <p>Count: {state.count}</p>
      <button  className="increment-btn" onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button  className="decrement-btn" onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  )
}

export default Usereducerpt1;