import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent");
    const initialValues = {user_fname:"",user_lname:"",user_email:"",user_number:"",user_topic:"",message:"",checkbox:""};

    emailjs
      .sendForm('service_xr25388', 'template_wcupdzn', form.current, {
        publicKey: 'I6GjrATxl-TUzfpBE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title"></p>
          <h2>Contact Me</h2>
          <p className="text-lg">
          “Technology like art is a soaring exercise of the human imagination”
          </p>
        </div>
        <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="user_fname"
                id="user_fname"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="user_lname"
                id="user_lname"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="user_email"
                id="user_email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="user_number"
                id="user_number"
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md"name="user_topic">
              <option>Select One...</option>
              <option>Business</option>
              <option>Job opportunity</option>
              <option>Personal</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              name="message"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
          </div>
       
          </form>
      </section>  
    );
  }
  