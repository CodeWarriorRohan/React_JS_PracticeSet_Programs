import styles from "./Item.module.css";

const Item = ({foodItem}) => {

    return <li className={`${styles['item']}`}>
    <span className={styles['span']}>{foodItem}</span>
  </li>
};

export default Item;