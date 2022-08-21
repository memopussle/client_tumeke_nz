import React, { useState } from "react";
import { Box } from "@material-ui/core";

const AddImage = ({ tourData, setTourData }) => {
  const [images, setImages] = useState([]);

  const fileToDataUri = (image) => {
    return new Promise((res) => {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        res(reader.result);
      });
      reader.readAsDataURL(image);
    });
  };

  const uploadImage = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImagesPromises = [];
      for (let i = 0; i < e.target.files.length; i++) {
        newImagesPromises.push(fileToDataUri(e.target.files[i]));
      }
      const newImages = await Promise.all(newImagesPromises);

      setImages([...images, ...newImages]);
      setTourData({ ...tourData, img: images });
    }
    e.target.value = "";
  };

  return (
    <Box display="flex" flexWrap="wrap">
      <input type="file" onChange={uploadImage} multiple />
      {images.length > 0
        ? images.map((imageObj, i) => {
            return (
              <div key={i}>
                <img width="120" src={imageObj} alt="tour" />
              </div>
            );
          })
        : null}
    </Box>
  );
};

export default AddImage;
