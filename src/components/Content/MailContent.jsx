import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const MailWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  margin: 0;

  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
`;

const StyledLineHolder = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100% - 20px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  padding: 5px 0;
`;

const StyledLabel = styled.label`
  color: #666;
  margin-right: 10px;
  padding-top: 7px;
  float: left;

  overflow: hidden;
  white-space: nowrap;
  width: max-content;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  margin-bottom: 2px;
  padding: 5px;

  flex-grow: 2;
`;

const ActiveName = styled.div`
  background-color: #0063e2;
  color: white;
  padding: 2px 5px;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  resize: none;
  min-height: 80px;
  padding: 0;
`;

const FlexWrapper = styled.div`
  flex-grow: 2;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

const StyledSendButton = styled.button`
  width: 200px;
`;

export default function MailContent() {
  const [mailSent, setMailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_website",
        "template_2rIQVhfP",
        e.target,
        "user_kJKkjKS2uEpNL7cQNqBPa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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

        <FlexWrapper>
          <StyledTextArea name="message" />
        </FlexWrapper>

        <StyledSendButton type="submit" value="Send">
          Send
        </StyledSendButton>
      </StyledForm>
    </MailWrapper>
  );
}
