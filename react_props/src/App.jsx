import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {

 // let foodItems = [];

   let foodItems = ["Fruits", "Green Vegetables", "Salad", "Rice", "Pulse", "Milk"];

  return (
    <>
      <div>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodItems items={foodItems}></FoodItems>
        <ErrorMsg items={foodItems}></ErrorMsg>
      </div>
    </>
  );
}

export default App;
