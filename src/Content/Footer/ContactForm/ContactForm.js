import React, {Component} from 'react'
import "./ContactForm.css"

class ContactForm extends Component{
    render(){
        return (
            <form className="contact-form">
                <div className="form-left">
                    <h2>Get in touch</h2>
                    <p className="form-p">5237 Rosemead Blvd San Gabriel, CA 91776</p>
                    <p className="form-p">calvintts95@gmail.com</p>
                    <p className="form-p">559-930-2366</p>
                </div>
                <div className="form-right">
                    <div className="name-input input-div">
                        <label className="form-label" htmlFor="name"/>
                        <input placeholder="Name" className="form-input" id="name" required/>
                    </div>
                    <div className="address-input input-div">
                        <label className="form-label" htmlFor="address"/>
                        <input placeholder="Address" className="form-input" id="address" required/>
                    </div>
                    <div className="email-input">
                        <label className="form-label" htmlFor="email"/>
                        <input placeholder="Email" className="form-input" id="email" required/>
                    </div>
                    <div className="phone-input">
                        <label className="form-label" htmlFor="phone"/>
                        <input placeholder="Phone" className="form-input" id="phone" required/>
                    </div>
                    <div className="subject-input input-div">
                        <label className="form-label" htmlFor="subject"/>
                        <input placeholder="Subject" className="form-input" id="subject" required/>
                    </div>
                    <div className="message-input textarea-div">
                        <label className="form-label" htmlFor="message"/>
                        <textarea placeholder="Type your message here" className="form-input" id="message" required/>
                    </div>
                    <div className="submit-input input-div">
                        <label className="form-label" htmlFor="submit"/>
                        <button id="submit" type="button">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;