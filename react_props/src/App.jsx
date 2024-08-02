import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput.jsx";

function App() {

 // let foodItems = [];

  // let foodItems = ["Fruits", "Green Vegetables", "Salad", "Rice", "Pulse"];

  //  let textStateArr = useState("Food Item Entered By User");
  //  let textToShow = textStateArr[0];
  //  let setTextState = textStateArr[1];
  //  console.log(`Current value of textState:${textToShow}`);

  //  OR

  // let [textToShow, setTextState] = useState();

   let [foodItems, setFoodItems] = useState([]);


   const onKeyDown = (event) =>{
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
   };

  return (
    <>
    <Container>
      <div>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        
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
