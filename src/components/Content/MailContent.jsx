import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const MailWrapper = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 20px;
`;

const StyledForm = styled.form`
  margin: 0;
  
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // display:flex;
  // flex-direction: column;
`;

const StyledLineHolder = styled.div`
  border-bottom: 1px solid #CCC;
  width: 100% - 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 0px;
`;

const StyledLabel = styled.label`
  color: #666;
  margin-right: 10px;
  float: left;
`;

const StyledInput = styled.input`
  flex-grow: 2;
  outline: none;
  border: none;
  margin-bottom: 2px;
`;

const ActiveName = styled.div`
  background-color: #0063E2;
  color: white;
  padding: 2px 5px;
  border-radius: 4px;
  
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 200px;
  outline: none;
  border: none;
`;


export default function MailContent() {

  const [mailSent, setMailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portfolio_website', 'template_2rIQVhfP', e.target, 'user_kJKkjKS2uEpNL7cQNqBPa')
      .then((result) => {
          console.log(result.text);
          setMailSent(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <MailWrapper>
      
      <StyledLineHolder>
        <StyledLabel>To:</StyledLabel> 
        <ActiveName>Andrew Zapotochnyi</ActiveName>
      </StyledLineHolder>
        
      <StyledForm className="contact-form" onSubmit={sendEmail}>
        {mailSent && <div>I will get back to you!</div>}
        <StyledInput type="hidden" name="contact_number" />


        <StyledLineHolder>
          <StyledLabel>From (Name):</StyledLabel>
          <StyledInput type="text" name="user_name" />
        </StyledLineHolder>

        <StyledLineHolder>
          <StyledLabel>From (Email):</StyledLabel>
          <StyledInput type="email" name="user_email" />
        </StyledLineHolder>
        
        
        
        <StyledLineHolder>
          
          <StyledTextArea name="message" />
          
        </StyledLineHolder>

        <StyledInput type="submit" value="Send" />

      </StyledForm>
    </MailWrapper>
  );
}