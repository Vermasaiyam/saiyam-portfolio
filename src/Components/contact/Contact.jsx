import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="textContainer">
        <h1>Let's Work Together</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>vermasaiyam9@gmail.com</span>
        </div>
        <div className="item">
            <h2>Address</h2>
            <span>1958, Master Colony, Brahmpuri, Meerut, Uttar Pradesh</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+91 7251859585</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
            <input type="text" placeholder='Name' required/>
            <input type="email" placeholder='Email' required/>
            <textarea rows={8} placeholder='Message...'/>
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
