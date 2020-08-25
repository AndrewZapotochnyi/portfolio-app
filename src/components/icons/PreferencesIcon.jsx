import React from "react";
import PreferencesImage from "../../styles/icons/Preferences.svg";
import IconWrap from "./IconWrapper";

let PreferencesIcon = ({ iconMobile }) => {
  return (
    <IconWrap
      src={PreferencesImage}
      alt="Preferences Image"
      iconMobile={iconMobile}
    ></IconWrap>
  );
};

export default PreferencesIcon;
