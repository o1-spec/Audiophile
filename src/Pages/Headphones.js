import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import Info from "./Info";
import Footer from "./Footer";
import ProductDisplayTwo from "./productDisplaytwo";
import ProductDisplay from "./Productdisplay";


function Headphones({Headproducts}) {
  const HeadphoneCont = Headproducts;
  
  return (
    <div>
      <div className="main-head">
        <Nav />
        <div className="product-hero">
          <div className="product-hero-name">
            <h4 className="prod-name">Headphones</h4>
          </div>
        </div>
      </div>
      <div className="display-section">
        <div className="product-container">
          {HeadphoneCont.map((headphone) =>
            headphone.id === 2 ? (
              <ProductDisplayTwo category={headphone.category} product={headphone} key={headphone.id}/>
            ) : (
              <ProductDisplay category={headphone.category} product={headphone} key={headphone.id} />
            )
          )}
        </div>
      </div>
      <Shop />
      <Info />
      <Footer />
    </div>
  );
}
export default Headphones;