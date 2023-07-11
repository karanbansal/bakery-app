import "./index.css";

const bannerData = [
  {
    heading: "Baked With Love",
    description:
      "Our passion for baking is poured into every recipe, serving smiles on a plate everyday.",
  },
  {
    heading: "Honestly Priced",
    description:
      "We constantly strive to offer the best products at the right prices.",
  },
  {
    heading: "Committed to Quality",
    description:
      "From our ingredients to our kitchen operations & guest services, we always prioritize quality.",
  },
];

function Banner() {
  return (
    <ul className="banner">
      {bannerData.map((item) => (
        <li className="bannerItm" key={item.heading}>
          <div className="itmContnr">
            <div className="imgWrp">
              <img src="./assets/cupcake.jpg" alt="cupcake" className="img" />
            </div>
            <div>
              <p className="hdng">{item.heading}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Banner;
