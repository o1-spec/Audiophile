import React from "react";
import Nav from "./Nav";
import Info from "./Info";
import Shop from "./Shop";
import Footer from "./Footer";
import ProductDisplay from "./Productdisplay";

function Earphone({earProducts}) {
  const earData = earProducts;

  return (
    <div>
      <div className="main-head">
        <Nav />
        <div className="product-hero">
          <div className="product-hero-name">
            <h4 className="prod-name">{earData[0].category}</h4>
          </div>
        </div>
      </div>
      <div className="display-section">
        <div className="product-container">
          {earData.map((earphone) => (
            <ProductDisplay product={earphone} key={earphone.id} />
          ))}
        </div>
      </div>
      <Shop />
      <Info />
      <Footer />
    </div>
  );
}
/*
function EarphoneProp({ earphone }) {
  return (
    <div className="product-cont">
      <div>
        <img src={earphone.imageUrl} alt="" />
      </div>
      <div className="prodd-info">
        <h4 className="prodd-head">{earphone.name}</h4>
        <p className="prod-text">{earphone.description}</p>
        <Link className="prodd-btn" to="/">
          See Product
        </Link>
      </div>
    </div>
  );
}
*/
export default Earphone;
