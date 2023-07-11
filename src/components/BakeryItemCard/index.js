import "./index.css";

function BakeryItemCard({ item, onBtnClickCallback }) {
  const { name, src, price, id, isAddedToCart = false } = item;

  function onBtnClick(e) {
    e.stopPropagation();
    onBtnClickCallback(id);
  }
  return (
    <div className="bkrItmCrd">
      <div className="bkrItmCrd__imgWrp">
        <img src={`./assets/${src}`} alt="cake" className="bkrItmCrd__img" />
      </div>
      <p className="bkrItmCrd__name">{name}</p>
      <p className="bkrItmCrd__cost">{`$ ${price}`}</p>
      <button className="bkrItmCrd__btn" onClick={(e) => onBtnClick(e)}>
        {isAddedToCart ? "REMOVE FROM CART" : "ADD TO CART"}
      </button>
    </div>
  );
}

export default BakeryItemCard;
