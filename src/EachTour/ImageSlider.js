import React from "react";



const ImageSlider = ({ slides }) => {

    return <div>{slides?.map(tourImage => (
        <div><img src={tourImage}  /></div>
    ))}</div>
}

export default ImageSlider;