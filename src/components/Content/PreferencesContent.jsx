import React from "react";
import styled from "styled-components";
import PreferencesButton from "./PreferencesButtons/PreferencesButton";
import JsIcon from "./PreferencesButtons/Js";
import RubyIcon from "./PreferencesButtons/Ruby";
import PythonIcon from "./PreferencesButtons/Python";
import HtmlIcon from "./PreferencesButtons/Html";
import CssIcon from "./PreferencesButtons/Css";
import NodeJsIcon from "./PreferencesButtons/NodeJs";
import ReactIcon from "./PreferencesButtons/React";
import RailsIcon from "./PreferencesButtons/Rails";
import jQueryIcon from "./PreferencesButtons/jQuery";
import ExpressIcon from "./PreferencesButtons/Express";
import MaterialUiIcon from "./PreferencesButtons/MaterialUi";
import FacebookApiIcon from "./PreferencesButtons/FacebookApi";
import GitHubIcon from "./PreferencesButtons/GitHub";
import SQLiteIcon from "./PreferencesButtons/SQLite";
import PostgreSQLIcon from "./PreferencesButtons/PostgreSQL";
import MochaIcon from "./PreferencesButtons/Mocha";
import ChaiIcon from "./PreferencesButtons/Chai";
import CypressIcon from "./PreferencesButtons/Cypress";
import JestIcon from "./PreferencesButtons/Jest";

const LanguagesIcons = [
  { Icon: JsIcon, title: "JavaScript" },
  { Icon: RubyIcon, title: "Ruby" },
  { Icon: PythonIcon, title: "Python" },
  { Icon: HtmlIcon, title: "HTML" },
  { Icon: CssIcon, title: "CSS" },
];

const Frameworks = [
  { Icon: NodeJsIcon, title: "NodeJS" },
  { Icon: ReactIcon, title: "React" },
  { Icon: RailsIcon, title: "Ruby on Rails" },
  { Icon: jQueryIcon, title: "jQuery" },
  { Icon: ExpressIcon, title: "Express JS" },
  { Icon: MaterialUiIcon, title: "Material UI" },
];

const systemsDatabases = [
  { Icon: FacebookApiIcon, title: "Facebook API" },
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
  margin: 5px 20px;
  text-align: left;
  font-family: "SF-Pro-Display-Semibold";
`;

const PreferencesWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

const PreferenceDiv = styled.div`
  margin: 0;
  padding: 5px 20px;
  width: calc(100%-20px);
  height: 90px;
  display: flex;
  background: #f6f6f6;
  // border-bottom: 1px solid #ccc;
  // border-top: 1px solid #ccc;
`;

const PreferencesContent = () => {
  return (
    <PreferencesWrapper>
      {Object.keys(preferencesIcons).map((key) => (
        <div>
          <HeaderPreferences>
            {preferencesIcons[key].headline}
          </HeaderPreferences>
          <PreferenceDiv>
            {preferencesIcons[key].Icons.map((value) => (
              <PreferencesButton Icon={value.Icon} title={value.title} />
            ))}
          </PreferenceDiv>
        </div>
      ))}
    </PreferencesWrapper>
  );
};

export default PreferencesContent;
