import React from 'react';
import styled from 'styled-components';

const PreferenceDiv = styled.div`
  margin: 0;
  height: 50px;
  width: 400px;
  display:flex;
  background: #ccc;
`;

const PreferencesContent = () => {

  return (
        <div>
          <h2>Preferences Content</h2>
          <PreferenceDiv></PreferenceDiv>

          <p>LANGUAGES: JavaScript, HTML, CSS, Python, Ruby
          FRAMEWORKS/LIBRARIES/ENVIRONMENTS: Node.js, React, Rails, Express, jQuery, Bootstrap, SASS, Facebook API
          SYSTEMS, CMS & DATABASES: SQL, Git, SQLite, PostgreSQL
          TESTING: Mocha, Cypress, Jest
          </p>
         
        </div>

        );
};

export default PreferencesContent;