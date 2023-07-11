import { useParams, useNavigate } from "react-router-dom";
import productListData from "../../components/ProductList/data";

import "./index.css";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = productListData.find((item) => item.id === Number(id));

  const { name, src, description } = item;

  return (
    <div className="prdct">
      <button className="prdct__bckBtn" onClick={() => navigate(-1)}>
        <img src="../assets/back.png" className="prdct__bckImg" alt="back" />
        <p>Back</p>
      </button>
      <p className="prdct__hdng">{name}</p>
      <div className="prdct__imgWrp">
        <img className="prdct__img" src={`../assets/${src}`} alt="cake" />
      </div>
      <p className="prdct__desc">{description}</p>
    </div>
  );
}

export default Product;
