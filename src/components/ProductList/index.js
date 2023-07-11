import productListData from "./data.js";
import BakeryItemCard from "../BakeryItemCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./index.css";

function ProductList({ className }) {
  const navigate = useNavigate();

  const [data, setData] = useState(productListData);

  function onBtnClickCallback(id) {
    let temp = [...data];
    const index = temp.findIndex((item) => item.id === id);
    let obj = temp[index];
    if (obj.isAddedToCart) {
      obj.isAddedToCart = false;
    } else {
      obj.isAddedToCart = true;
    }
    temp[index] = obj;
    setData(temp);
  }

  function onProceedToCheckoutClick() {
    const result = data.filter((item) => item.isAddedToCart === true);
    if (result.length > 0) {
      console.log("Items Purhcased", result);
    } else {
      console.log("Cart is Empty");
    }
  }

  return (
    <div className={`prdLst ${className}`}>
      <p className="prdLst__hdng">NEW PRODUCTS</p>

      <ul className="prdLst__cntnr">
        {data.map((item) => (
          <li
            key={item.id}
            className="prdLst__itm"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <BakeryItemCard
              item={item}
              onBtnClickCallback={onBtnClickCallback}
            />
          </li>
        ))}
      </ul>

      <div className="prdLst__chckoutBtnWrp">
        <button
          className="prdLst__chckoutBtn"
          onClick={() => onProceedToCheckoutClick()}
        >
          <img
            src="./assets/checklist.png"
            className="prdLst__cartImg"
            alt="cart"
          />
          <p>Proceed to Checkout</p>
        </button>
      </div>
    </div>
  );
}

export default ProductList;
