import React from "react";
import PhotosImage from "../../styles/icons/Photos.svg";
import IconWrap from "./IconWrapper";

let PhotosIcon = ({ iconMobile }) => {
  return (
    <IconWrap src={PhotosImage} alt="Photos Image" iconMobile={iconMobile} />
  );
};

export default PhotosIcon;
