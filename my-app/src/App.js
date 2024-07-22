import React from "react";
import UploadForm from "./UploadForm";
import ImageGallery from "./ImageGallery";

function App() {
  return (
    <div className="App">
      <h1>Image Upload with Cloudinary</h1>
      <UploadForm />
      <ImageGallery />
    </div>
  );
}

export default App;
