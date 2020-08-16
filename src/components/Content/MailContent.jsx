import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 0;
  padding: 20px;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display:flex;
  flex-direction: column;
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
    <StyledForm className="contact-form" onSubmit={sendEmail}>
      {mailSent && <div>I will get back to you!</div>}
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </StyledForm>
  );
}