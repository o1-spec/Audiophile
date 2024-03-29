import React from "react";
import { Link } from "react-router-dom";

function ProdDesc({ selectedProduct }) {
  return (
    <>
      {selectedProduct ? (
        <div className="product-description">
          <div className="back">
            <Link to={`/${selectedProduct.category}`}>Go Back</Link>
          </div>
          <div className="prod-describe">
            <div className="desc-img">
              <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            </div>
            <div className="desc-text">
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <span>$ {selectedProduct.price}</span>
              <div className="counter">
                <div>
                  <button className="minus">-</button>
                  <span className="count">1</span>
                  <button className="plus">+</button>
                </div>
                <button className="add-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="prod-features">
            <div className="features">
              <h3>Features</h3>
              <p>{selectedProduct.features}</p>
            </div>
            <div className="inthebox"></div>
          </div>
          <div className="product-images">
            {selectedProduct.subImages.map((img) => (
              <img className="prod-img" src={img} alt="Images" key={img} />
            ))}
          </div>
          <div className="also-like">
            <h3>You may also like</h3>
            <div className="like">
              {selectedProduct.alsoLike.map((also) => (
                <div className="also" key={also.name}>
                  <img src={also.alsoImg} alt={also.name} />
                  <p>{also.name}</p>
                  <Link to={`/${also.category}/${also.fullname}`}>See Product</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : ( 
        <p>Product not Found</p>
      )}
    </>
  );
}

export default ProdDesc;
