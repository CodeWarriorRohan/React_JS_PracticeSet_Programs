import styles from "./Item.module.css";

//const Item = ({ foodItem }) => {
const Item = ({ foodItem, handleBuyButton }) => {

  // const handleByButtonClicked = () => {
  //   console.log(`${foodItem} being bought !`);
  // };

  return (
    <li className={`${styles["item"]}`}>
      <span className={styles["span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info text-white`}
        //onClick={handleByButtonClicked}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
