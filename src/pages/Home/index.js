import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

import "./index.css";

function Home() {
  return (
    <div className="hmPg">
      <Banner />
      <ProductList className="hmPg__list" />
    </div>
  );
}

export default Home;
