import React from "react";
import NotesImage from "../../styles/icons/Notes.svg";
import IconWrap from "./IconWrapper";

let NotesIcon = ({ iconMobile }) => {
  return (
    <IconWrap
      src={NotesImage}
      alt="Calendar Image"
      iconMobile={iconMobile}
    ></IconWrap>
  );
};

export default NotesIcon;
