// import Form from './Components/Form';
// import Formstyle from './Components/Formstyle.css';
// import CompleteFrom from './Components/CompleteFrom';
// import Map from "./Components/Map";
// import Mapstyle from "./Components/Mapstyle.css"
// import Useeffect from "./Components/Useeffect"
// import Useeffectstyle from "./Components/Useeffectstyle.css"
// import Usereducer from "./Components/Usereducer";
// import Usereducerpt1 from "./Components/Usereducerpt1";
// import Usereducerpt1style from "./Components/Usereducerpt1style.css";



// function App() {
//   return (
//     <div>
//       {/* <h3>App component</h3> */}
//       {/* <Form/> */}
//       {/* <CompleteFrom/> */}
//       {/* <Map /> */}
//       {/* <Useeffect /> */}
//       {/* <Usereducer /> */}
//       {/* <Usereducerpt1/> */}
//     </div>
//   );
// }

// export default App;


// ////////implementing usecontext
import React from "react";
import {createContext} from "react";
import UseContexthook from "./Components/UseContexthook";

export const userContext = createContext();

function App() {
  return(
    <userContext.Provider value="GSVTECH SYSTEMS">
<UseContexthook />
</userContext.Provider>
  );
  }
  

  export default App;