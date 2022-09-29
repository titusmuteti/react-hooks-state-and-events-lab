import React, {useState} from "react";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(true);

  function handleClick() {
    setIsInCart(isInCart=>!isInCart)
  }
  
  const itemClass = isInCart ? "" : "in-cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
