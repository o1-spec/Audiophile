import React from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import ProdDesc from "./ProdDesc";
import Nav from "./Nav";
import Shop from "./Shop";
import Info from "./Info";
import Footer from "./Footer";

function HeadphoneProducts({ HeadProduct }) {
  const { name } = useParams();

  console.log(name)

  
  const selectedProduct = HeadProduct.find(
    (head) => head.name === name
  );
  //console.log(selectedProduct);

  //let imgSelect = selectedProduct.imageURl
  return (
    <div>
      <div className="main-head">
        <Nav />
      </div>
      <ProdDesc selectedProduct={selectedProduct}/>
      <Shop />
      <Info />
      <Footer />
    </div>
  );
}

export default HeadphoneProducts;
