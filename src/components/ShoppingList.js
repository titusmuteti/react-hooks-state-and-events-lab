import React, {useState} from "react";
import Item from "./Item";
import Items from "../data/items";

function ShoppingList() {

  const [items, setItems] = useState(Items)
  const [selectedCategory, setSelectedCategory] = useState("Filter by category");

  const itemsToDisplay = items.filter((item)=> {
    if(selectedCategory === "Filter by category") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  function handleCategoryChange(event){
    setSelectedCategory (event.target.value)
  }

  const itemList =itemsToDisplay.map((item)=> (
    <Item key={item.id} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
