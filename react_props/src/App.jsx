import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput.jsx";

function App() {

 // let foodItems = [];

   let foodItems = ["Fruits", "Green Vegetables", "Salad", "Rice", "Pulse", "Milk"];

  return (
    <>
    <Container>
      <div>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
        
        <ErrorMsg items={foodItems}></ErrorMsg>
      </div>
    </Container>
    <Container>
      <p>Above is the list of food that are good for your health ! and stay fit.</p>
    </Container>
    </>
  );
}

export default App;
