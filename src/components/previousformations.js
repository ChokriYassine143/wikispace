// src/previousformations.js
import React from "react";
import "./prev.css";
import img1f from "./previousformations/1.jpeg";
import img2f from "./previousformations/2.jpeg";
import img3f from "./previousformations/3.jpeg";
import img4f from "./previousformations/4.jpeg";
import img5f from "./previousformations/5.jpeg";
import img6f from "./previousformations/6.jpeg";
import img7f from "./previousformations/7.jpeg";
import img8f from "./previousformations/8.jpeg";
import img9f from "./previousformations/9.jpeg";
import img10f from "./previousformations/10.jpeg";
import img11f from "./previousformations/11.jpeg";
import img12f from "./previousformations/12.jpeg";
import img13f from "./previousformations/13.jpeg";
import img14f from "./previousformations/14.jpeg";
import img15f from "./previousformations/15.jpeg";
import img16f from "./previousformations/16.jpeg";
import img17f from "./previousformations/17.jpeg";
import img18f from "./previousformations/18.jpeg";
import img19f from "./previousformations/19.jpeg";

const images = [
  img1f, img2f, img10f, img11f, img12f, img14f, img13f, img15f, img16f, img17f, img18f, img19f, img3f,
  img4f, img5f, img6f, img7f, img8f, img9f
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`formation ${index + 1}`} className="image" />
      ))}
    </div>
  );
};

export default ImageGallery;
