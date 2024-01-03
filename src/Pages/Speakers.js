import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import Info from "./Info";
import Footer from "./Footer";
import ProductDisplay from "./Productdisplay";
import ProductDisplayTwo from "./productDisplaytwo";

let speakproducts = [
  {
    id: 1,
    name: "ZX9 SPEAKER",
    category: "Speakers",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    imageUrl: "images/Speak 1.png",
  },
  {
    id: 2,
    name: "ZX7 SPEAKER",
    category: "Speakers",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    imageUrl: "images/Speak 2.png",
  },
];

function Speaker() {
  const speakData = speakproducts;
  return (
    <div>
      <div className="main-head">
        <Nav />
        <div className="product-hero">
          <div className="product-hero-name">
            <h4 className="prod-name">Speaker</h4>
          </div>
        </div>
      </div>
      <div className="display-section">
        <div className="product-container">
          {speakData.map((speaker) =>
            speaker.id === 2 ? (
              <ProductDisplayTwo product={speaker} key={speaker.id} />
            ) : (
              <ProductDisplay product={speaker} key={speaker.id} />
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
/*
function SpeakerPropOne({ speaker }) {
  return (
    <div className="product-cont">
      <div>
        <img src={speaker.imageUrl} alt="" />
      </div>
      <div className="prodd-info">
        <h4 className="prodd-head">{speaker.name}</h4>
        <p className="prod-text">{speaker.description}</p>
        <Link className="prodd-btn" to="/">
          See Product
        </Link>
      </div>
    </div>
  );
}

function SpeakerPropTwo({ speaker }) {
  return (
    <div className="product-cont">
      <div className="prodd-info">
        <h4 className="prodd-head">{speaker.name}</h4>
        <p className="prod-text">{speaker.description}</p>
        <Link className="prodd-btn" to="/">
          See Product
        </Link>
      </div>
      <div>
        <img src={speaker.imageUrl} alt="" />
      </div>
    </div>
  );
}*/

export default Speaker;
