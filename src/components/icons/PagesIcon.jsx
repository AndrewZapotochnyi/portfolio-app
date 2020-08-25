import React from "react";
import PagesImage from "../../styles/icons/pages.png";
import IconWrap from "./IconWrapper";

let PagesIcon = ({ iconMobile }) => {
  return (
    <IconWrap
      src={PagesImage}
      alt="Pages Image"
      iconMobile={iconMobile}
    ></IconWrap>
  );
};

export default PagesIcon;
