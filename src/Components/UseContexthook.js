//use context hook manage state globally
//it helps us to pass data from parent comp to child comp
// it is used to store and provide the  data to all the components
//it solves the props drilling problem in react (paasing props through each nested comp)
// it stores all data globally in context, if any component needs the data it can access the data
// it creates a store called  as context and any component can access it

import React, {useContext} from "react";
import {userContext} from "../App";

function UseContexthook() {
    const data =useContext(userContext);

    return<h3>Welcome {data}</h3>;
}

export default UseContexthook