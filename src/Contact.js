
import { useState } from 'react';
import {validateEmail} from './helper'
import "./Contact.css"

// function Contact() {
// return (
//     <section class = "contact-form">
//     <h2 id="contact-me">Contact Me Here</h2>
// <form action="#">
//     <label for="email">
//         <h4><img src="https://tleeming15.github.io/my-portfolio/assets/images/email-icon.png"/>Email</h4>
//         <input type="email" id="email" placeholder="Enter your Email"/>
//     </label>
//     <label for="message">
//         <h4>Message</h4>
//         <textarea id="message">Your Message</textarea>
//     </label>
//     <div class="submit-button-wrapper">
//         <input type="submit" value="Send Message"/>
//     </div>
// </form>

// </section>
//       );    
//     }
    
//     export default Contact;

export default function About() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
  
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
  
      } else if (inputType === 'userName') {
        setUserName(inputValue);
  
      } else if(inputType === 'message'){
        setMessage(inputValue);
      }
    };
  
    const handleEmptyValue = (e) => {
  
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email' && inputValue.length === 0) {
        setErrorMessage('Oops, please enter valid Email.');
        return;
  
      } else if (inputType === 'userName' && inputValue.length === 0) {
        setErrorMessage('Oops, please enter valid Name.');
          return;
  
      } else if (inputType === 'message' && inputValue.length === 0){
        setErrorMessage('Oops it seems you forgot to type a Message!');
          return;
      }
    };
  
    const handleFormSubmit = (e) => {
  
      e.preventDefault();
  
      if (!validateEmail(email) || !userName) {
        setErrorMessage('Oops, your name or Email appears to be invalid.');
        return;
      }
  
      setUserName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
    };
  
    return (
      <div>
        <h2 className='form-title'><img src="https://tleeming15.github.io/my-portfolio/assets/images/email-icon.png" alt="Email logo"/>Contact Me Here</h2>
  
        <form>
  
          <div> 
            <label>Name:</label><br></br>
            <input
              value={userName}
              name='userName'
              type= 'text'
              onChange={handleInputChange}
              onBlur={handleEmptyValue}/>
          </div>
  
          <div> 
            <label>Email Address:</label><br></br>
            <input
              value={email}
              name='email'
              type= 'text'
              onChange={handleInputChange}
              onBlur={handleEmptyValue}/>
          </div>
  
          <div> 
            <label>Message:</label><br></br>
            <textarea
              value={message}
              name='message'
              onChange={handleInputChange}
              onBlur={handleEmptyValue}>
            </textarea>
          </div>
  
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
  
        {errorMessage && (
          <div className='margin-top'>
            <p>{errorMessage}</p>
          </div>
        )}
  
      </div>
    );
  }