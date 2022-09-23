import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Slide } from 'react-reveal'
import { StyledContact } from '../pages/styles/Contact.styled'


const Contact = () => {

  const [sent, setSent] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_qav8wd8', 'template_tg3nia7', e.target, 'xuCSWXbE-ut8jtsfc').then(res=>setSent(true)).catch(err=>console.log(err))
  }

  return (
    <StyledContact id='contact'>
      <Slide right>
        <h1>Contact</h1>
      </Slide>
      <Slide right cascade>
        <form onSubmit={sendEmail}>
          <input placeholder='Your Name'type='text' name='name' className='input-name' required/>
          <input placeholder='Your Email' type='email' name='email' className='input-email' required/>
          <textarea placeholder='Your Message' name='message' required/>
          <button type='submit'>Send</button>
        </form>
      </Slide>
      {sent && <p>Your email was sent!</p>}
    </StyledContact>
  )
}

export default Contact