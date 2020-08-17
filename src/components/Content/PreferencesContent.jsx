import React from 'react';
import styled from 'styled-components';
import PreferencesButton from './PreferencesButtons/PreferencesButton';
import JsIcon from './PreferencesButtons/Js';
import RubyIcon from './PreferencesButtons/Ruby';
import PythonIcon from './PreferencesButtons/Python';

const PreferencesWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;


const PreferenceDiv = styled.div`
  margin: 0;
  height: 70px;
  width: 100%;
  display:flex;
  background: #ccc;
`;

const PreferencesContent = () => {

  return (
        <PreferencesWrapper>
          <h2>Preferences Content</h2>
          <PreferenceDiv>
            <PreferencesButton 
              Icon={JsIcon}
              title="JavaScript"
            />
            <PreferencesButton
              Icon={RubyIcon}
              title="Ruby"
            />
            <PreferencesButton 
              Icon={PythonIcon}
              title="Python"
            />

           

          </PreferenceDiv>

          <p>LANGUAGES: JavaScript, HTML, CSS, Python, Ruby
          FRAMEWORKS/LIBRARIES/ENVIRONMENTS: Node.js, React, Rails, Express, jQuery, Bootstrap, SASS, Facebook API
          SYSTEMS, CMS & DATABASES: SQL, Git, SQLite, PostgreSQL
          TESTING: Mocha, Cypress, Jest
          </p>
         
        </PreferencesWrapper>

        );
};

export default PreferencesContent;