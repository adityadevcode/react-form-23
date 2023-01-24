// "use strict";
import React from "react";

const Map = () => {
    const info = [
        { id:1, name: "tony", age: 22, place: "xsdnadk", Nationality: "pqr" },
        { id:32, name: "ioony", age: 222, place: "hadlz", Nationality: "pqrsda" },
        { id:39, name: "sstony", age: 92, place: "dasz", Nationality: "pqrads" },
        {id:2, name: "sdftony", age: 44, place: "dsz", Nationality: "sadpqr" },
        { id:3, name: "ewdtony", age: 22, place: "xyfsdz", Nationality: "asdpqr" },
        { id:4, name: "astony", age: 82, place: "ssz", Nationality: "aaapqr" },
        { id:5, name: "dadsatony", age: 25, place: "llz", Nationality: "dfdspqr" },
        { id:6, name: "gfwstony", age: 225, place: "pyz", Nationality: "dsdspqr" },
        { id:17, name: "adsdtony", age: 20, place: "pyz", Nationality: "sdjdpqr" },
      ];

  return (
<>
<ul>
{info.map((info) => {
return (
    // <li key={info.id} className="list-item">{info.name} | {info.age} | {info.place} | {info.Nationality}</li>
    <li key={info.id} className="list-item">{info.name} |  {info.Nationality}</li>

    );
})}
</ul>
</>
  );
  }

export default Map;
