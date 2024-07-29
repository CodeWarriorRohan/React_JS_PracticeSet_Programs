import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput.jsx";

function App() {

 // let foodItems = [];

   let foodItems = ["Fruits", "Green Vegetables", "Salad", "Rice", "Pulse", "Milk"];

  //  let textStateArr = useState("Food Item Entered By User");
  //  let textToShow = textStateArr[0];
  //  let setTextState = textStateArr[1];
  //  console.log(`Current value of textState:${textToShow}`);

  //  OR

   let [textToShow, setTextState] = useState("Food Item Entered By User");


   const handleOnChange = (event) =>{
   console.log(event.target.value);
   setTextState(event.target.value);
   }

  return (
    <>
    <Container>
      <div>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
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
