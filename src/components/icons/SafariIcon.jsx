import React from "react";
import SafariImage from "../../styles/icons/Safari.svg";
import IconWrap from "./IconWrapper";

let SafariIcon = ({ iconMobile }) => {
  return (
    <IconWrap
      src={SafariImage}
      alt="Mail Image"
      iconMobile={iconMobile}
    ></IconWrap>
  );
};

export default SafariIcon;
