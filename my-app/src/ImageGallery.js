// src/components/ImageGallery.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/images");
        setImages(res.data);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <img
            key={image._id}
            src={image.url}
            alt={image.filename}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              margin: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
