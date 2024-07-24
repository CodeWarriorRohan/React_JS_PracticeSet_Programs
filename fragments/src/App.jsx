import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from 'react';

// 1. Fragments

function App() {
    let foodItems = ["Green Vegetables", "Salad", "Rice", "Pulse", "Milk"];

  // let foodItems = [];

  // 3. Coditional Reandering

  // (1). if-else statements

  // if(foodItems.length == 0){
  //   return <h2>List is empty !</h2>
  // }

  // (2). Ternary Operators

  // let emptyMsg = foodItems.length == 0 ? <h2>Use of turnary operator (?), List is empty !</h2> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/* {emptyMsg} */}
      {/* (3). Logical Operator */}

      {foodItems.length == 0 && <h2>List is empty !</h2>}
      <ul className="list-group">
      {/* 2. map() function */}
        {foodItems.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

