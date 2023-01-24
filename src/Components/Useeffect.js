//it is used to perform some affect in your compononent
// it is very useful especially if you want to fetch an Api
// // useEffect (()={
//     fetch()....
// },[])
// component will render only once empty brackets

import React, { useEffect, useState } from "react";

function Useeffect() {
  const [count, setcount] = useState(0);
  const [calculation, setcalculation] = useState(0);
  return (
    <>
    <h3 className="heading">{count}</h3>
    <h3 className="heading">{calculation}</h3>
      <button className="button"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Count Increment
      </button>
      <button
        onClick={() => {
          setcalculation(calculation - 1);
        }}
      >
        Count Decrement
      </button>
    </>
  );
}

export default Useeffect;
