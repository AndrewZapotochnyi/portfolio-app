import React from "react";
import MochaImage from "../../../styles/icons/Preferences/Mocha.png";
import PreferencesIconWrap from "./PreferencesIconWrap";

let MochaIcon = () => {
  return (
    <PreferencesIconWrap
      src={MochaImage}
      alt="Mocha Image"
    ></PreferencesIconWrap>
  );
};

export default MochaIcon;
