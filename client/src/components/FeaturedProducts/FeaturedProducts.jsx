import "./FeaturedProducts.scss";

import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "",
      title: "Long sleeve graphic T-shirt",
      isNew: true,
      oldPrice: "19",
      price: "12",
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long sleeve graphic T-shirt",
      isNew: true,
      oldPrice: "19",
      price: "12",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long sleeve graphic T-shirt",
      isNew: true,
      oldPrice: "19",
      price: "12",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long sleeve graphic T-shirt",
      isNew: true,
      oldPrice: "19",
      price: "12",
    },
  ];
  return <div className="featuredProducts">
    <div className="top">
      <h1>{type} products</h1>
      <p> gevfg v  fegfvrjygf yfbfhjfuy fhfhgdf efwgbfb yfyf</p>
    </div>
    <div className="bottom">
      {data.map(item=>{
        <Card item={item} key={item.id}
        />
      })}
    </div>
    </div>;
};

export default FeaturedProducts;
