import React from "react";
import MailImage from "../../styles/icons/Mail.svg";
import IconWrap from "./IconWrapper";

let MailIcon = ({ iconMobile }) => {
  return (
    <IconWrap
      src={MailImage}
      alt="Mail Image"
      iconMobile={iconMobile}
    ></IconWrap>
  );
};

export default MailIcon;
