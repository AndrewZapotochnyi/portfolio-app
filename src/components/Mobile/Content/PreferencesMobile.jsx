import React from "react";
import styled from "styled-components";
import PreferencesButtonMobile from "./Preferences/PreferencesButtonMobile";
import JsIcon from "../../Content/PreferencesButtons/Js";
import RubyIcon from "../../Content/PreferencesButtons/Ruby";
import PythonIcon from "../../Content/PreferencesButtons/Python";
import HtmlIcon from "../../Content/PreferencesButtons/Html";
import NodeJsIcon from "../../Content/PreferencesButtons/NodeJs";
import ReactIcon from "../../Content/PreferencesButtons/React";
import RailsIcon from "../../Content/PreferencesButtons/Rails";
import jQueryIcon from "../../Content/PreferencesButtons/jQuery";
import FacebookApiIcon from "../../Content/PreferencesButtons/FacebookApi";
import GitHubIcon from "../../Content/PreferencesButtons/GitHub";
import SQLiteIcon from "../../Content/PreferencesButtons/SQLite";
import PostgreSQLIcon from "../../Content/PreferencesButtons/PostgreSQL";
import MochaIcon from "../../Content/PreferencesButtons/Mocha";
import ChaiIcon from "../../Content/PreferencesButtons/Chai";
import CypressIcon from "../../Content/PreferencesButtons/Cypress";
import JestIcon from "../../Content/PreferencesButtons/Jest";

// import { preferencesIcons } from '../../Content/PreferencesContent';

const LanguagesIcons = [
  { Icon: JsIcon, title: "JavaScript" },
  { Icon: RubyIcon, title: "Ruby" },
  { Icon: PythonIcon, title: "Python" },
  { Icon: HtmlIcon, title: "HTML" },
];

const Frameworks = [
  { Icon: NodeJsIcon, title: "NodeJS" },
  { Icon: ReactIcon, title: "React" },
  { Icon: RailsIcon, title: "Rails" },
  { Icon: jQueryIcon, title: "jQuery" },
];

const systemsDatabases = [
  { Icon: FacebookApiIcon, title: "FacebookApi" },
  { Icon: GitHubIcon, title: "Git/GitHub" },
  { Icon: SQLiteIcon, title: "SQLite" },
  { Icon: PostgreSQLIcon, title: "PostgreSQL" },
];

const testing = [
  { Icon: MochaIcon, title: "Mocha" },
  { Icon: ChaiIcon, title: "Chai" },
  { Icon: CypressIcon, title: "Cypress" },
  { Icon: JestIcon, title: "Jest" },
];

const preferencesIcons = {
  languages: { Icons: LanguagesIcons, headline: "Languages" },
  frameworks: { Icons: Frameworks, headline: "Frameworks and Libraries" },
  systems: { Icons: systemsDatabases, headline: "Systems, Databases and API" },
  testing: { Icons: testing, headline: "Testing" },
};

const HeaderPreferences = styled.h4`
  margin: 3px 10px;
  // margin-top: 1vh;
  // text-align: left;
  font-family: "SF-Pro-Display-Semibold";
`;

const PreferencesWrapper = styled.div`
  // width: 100%;
  // height: 100%;
  // background: white;
`;

const PreferenceDiv = styled.div`
  margin: 5px;
  margin-bottom: 7px;
  padding: 0;
  // padding-left: 10px;

  // padding-bottom: 0px;
  font-size: 2vh;
  width: calc(100%-20px);
  height: 12vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // background: #f6f6f6;
  // // border-bottom: 1px solid #ccc;
  // // border-top: 1px solid #ccc;
`;

const PreferencesMobile = () => {
  return (
    <PreferencesWrapper>
      {Object.keys(preferencesIcons).map((key) => (
        <div>
          <HeaderPreferences>
            {preferencesIcons[key].headline}
          </HeaderPreferences>
          <PreferenceDiv>
            {preferencesIcons[key].Icons.map((value) => (
              <PreferencesButtonMobile Icon={value.Icon} title={value.title} />
            ))}
          </PreferenceDiv>
        </div>
      ))}
    </PreferencesWrapper>
  );
};

export default PreferencesMobile;
