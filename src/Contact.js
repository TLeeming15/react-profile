
import { useState } from 'react';
import "./Contact.css"

function Contact() {
return (
    <section class = "contact-form">
    <h2 id="contact-me">Contact Me Here</h2>
<form action="#">
    <label for="email">
        <h4><img src="assets/images/email-icon.png"/>Email</h4>
        <input type="email" id="email" placeholder="Enter your Email"/>
    </label>
    <label for="message">
        <h4>Message</h4>
        <textarea id="message">Your Message</textarea>
    </label>
    <div class="submit-button-wrapper">
        <input type="submit" value="Send Message"/>
    </div>
</form>

</section>
      );    
    }
    
    export default Contact;