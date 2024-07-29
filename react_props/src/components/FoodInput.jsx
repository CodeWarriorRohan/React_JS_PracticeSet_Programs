import styles from "./FoodInput.module.css";

// const FoodInput = () => {
const FoodInput = ({ handleOnChange }) => {

  // const handleOnChange = (event) =>{
  //   console.log(event.target.value);
  // }

  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    ></input>
  );
};

export default FoodInput;
