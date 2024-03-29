import "./index.css";
import React from "react";
import Homepage from "./Pages/Homepage";
import Headphones from "./Pages/Headphones";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Speaker from "./Pages/Speakers";
import Earphone from "./Pages/EarPhones";
import HeadphoneProducts from "./Pages/HeadphonesProduct";
import EarPhoneProducts from "./Pages/EarPhonesProduct";
import SpeakerProducts from "./Pages/SpeakersProduct";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Headproducts = [
  {
    id: 1,
    name: " XX99 Mark IIHeadphones",
    category: "Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    imageUrl: "../images/Head 1.png",
    price: 2.999,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic",
    inTheBox: [
      "Headphone Unit",
      "Replacement Earcups",
      "User Manual",
      "3.5mm 5m Audio Cable",
      "Travel Bag",
    ],
    subImages: [
      "../images/Sub2.png",
      "../images/Sub1.png",
      "../images/Sub3.png",
    ],
    alsoLike: [
      {
        fullname: "XX99 Mark Headphones",
        name: "XX99 Mark",
        category: "Headphones",
        alsoImg: "../images/Head 2.png",
      },
      {
        fullname: "XX59 Headphones",
        name: "XX99",
        category: "Headphones",
        alsoImg: "../images/Head 3.png",
      },
      {
        fullname: "ZX7 SPEAKER",
        name: "ZX7 Speaker",
        category: "Speakers",
        alsoImg: "../images/Speak 2.png",
      },
    ],
  },
  {
    id: 2,
    name: "XX99 Mark Headphones",
    category: "Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    imageUrl: "../images/Head 2.png",
    price: 1750,
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    inTheBox: [""],
    subImages: [
      "../images/Sub4.png",
      "../images/Sub6.png",
      "../images/Sub5.png",
    ],
    alsoLike: [
      {
        fullname: " XX99 Mark IIHeadphones",
        name: "XX99 Mark II",
        category: "Headphones",
        alsoImg: "../images/Head 1.png",
      },
      {
        fullname: "XX59 Headphones",
        name: "XX59",
        category: "Headphones",
        alsoImg: "../images/Head 3.png",
      },
      {
        fullname: "ZX7 SPEAKER",
        name: "ZX7 Speaker",
        category: "Speakers",
        alsoImg: "../images/Speak 2.png",
      },
    ],
  },
  {
    id: 3,
    name: "XX59 Headphones",
    category: "Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    imageUrl: "../images/Head 3.png",
    price: 899,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inTheBox: [""],
    subImages: [
      "../images/Sub7.png",
      "../images/Sub8.png",
      "../images/Sub9.png",
    ],
    alsoLike: [
      {
        fullname: " XX99 Mark IIHeadphones",
        name: "XX99 Mark II",
        category: "Headphones",
        alsoImg: "../images/Head 1.png",
      },
      {
        fullname: "XX99 Mark Headphones",
        name: "XX99 Mark",
        category: "Headphones",
        alsoImg: "../images/Head 2.png",
      },
      {
        fullname: "ZX7 SPEAKER",
        name: "ZX7 Speaker",
        category: "Speakers",
        alsoImg: "../images/Speak 2.png",
      },
    ],
  },
];

let earProducts = [
  {
    id: 1,
    name: "YX1 WIRELESS EARPHONES",
    category: "EarPhones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    imageUrl: "../images/Ear.png",
    price: 1500,
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    subImages: [
      "../images/Sub16.png",
      "../images/Sub17.png",
      "../images/Sub18.png",
    ],
    alsoLike: [
      {
        fullname: "XX99 Mark Headphones",
        name: "XX99 Mark I",
        category: "Headphones",
        alsoImg: "../images/Head 2.png",
      },
      {
        fullname: "XX59 Headphones",
        name: "XX59",
        category: "Headphones",
        alsoImg: "../images/Head 3.png",
      },
      {
        fullname: "ZX7 SPEAKER",
        name: "ZX7 Speakers",
        category: "Speakers",
        alsoImg: "../images/Speak 2.png",
      },
    ],
  },
];

let speakproducts = [
  {
    id: 1,
    name: "ZX9 SPEAKER",
    category: "Speakers",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    imageUrl: "../images/Speak 1.png",
    price: 4500,
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).    Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    subImages: [
      "../images/Sub10.png",
      "../images/Sub11.png",
      "../images/Sub12.png",
    ],
    alsoLike: [
      {
        fullname: "ZX9 SPEAKER",
        name: "ZX9 Speakers",
        category: "Speakers",
        alsoImg: "../images/Speak 1.png",
      },
      {
        fullname: "XX99 Mark Headphones",
        name: "XX99 Mark",
        category: "Headphones",
        alsoImg: "../images/Head 2.png",
      },
      {
        fullname: "XX59 Headphones",
        name: "XX59",
        category: "Headphones",
        alsoImg: "../images/Head 3.png",
      },
    ],
  },
  {
    id: 2,
    name: "ZX7 SPEAKER",
    category: "Speakers",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    imageUrl: "../images/Speak 2.png",
    price: 3500,
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.   The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    subImages: [
      "../images/Sub13.png",
      "../images/Sub14.png",
      "../images/Sub15.png",
    ],
    alsoLike: [
      {
        fullname: "ZX7 SPEAKER",
        name: "ZX7 Speakers",
        category: "Speakers",
        alsoImg: "../images/Speak 2.png",
      },
      {
        fullname: "XX99 Mark Headphones",
        name: "XX99 Mark I",
        category: "Headphones",
        alsoImg: "../images/Head 2.png",
      },
      {
        fullname: "XX59 Headphones",
        name: "XX59",
        category: "Headphones",
        alsoImg: "../images/Head 3.png",
      },
    ],
  },
];

function App() {
  const HeadProduct = Headproducts;
  const speakProduct = speakproducts;
  const earProduct = earProducts;

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/Headphones"
            element={<Headphones Headproducts={HeadProduct} />}
          ></Route>
          <Route path="/Speakers" element={<Speaker />}></Route>
          <Route
            path="/Earphones"
            element={<Earphone earProducts={earProduct} />}
          ></Route>
          <Route
            path="/Headphones/:name"
            element={<HeadphoneProducts HeadProduct={HeadProduct} />}
          ></Route>
          <Route
            path="/Speakers/:name"
            element={<SpeakerProducts SpeakProduct={speakProduct} />}
          ></Route>
          <Route
            path="/Earphones/:name"
            element={<EarPhoneProducts EarProduct={earProduct} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
