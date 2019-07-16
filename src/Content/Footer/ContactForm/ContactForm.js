import React, {Component} from 'react'
import "./ContactForm.css"
import axios from '../../../axios-data';

class ContactForm extends Component{
    state = {
        name : "",
        address : "",
        email : "",
        phone : "",
        subject : "",
        message : "",
    }

    sendContact = () => {
        const contact = {
            name : this.state.name,
            address : this.state.address,
            email : this.state.email,
            phone : this.state.phone,
            subject : this.state.subject,
            message : this.state.message,
        }
        axios.post('/contacts.json', contact)
            .then(response=>console.log(response))
            .catch(error => console.log(error))
    }

    handleNameChange = (event) => {
        this.setState({name:event.target.value})
    }
    handleEmailChange = (event) => {
        this.setState({email:event.target.value})
    }
    handleAddressChange = (event) => {
        this.setState({address:event.target.value})
    }

    normalizePhone(phone){
        phone = phone.replace(/[^\d]/g, "")
        if(phone.length>=10){
            return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        }
        return null
    }

    handlePhoneChange = (event) => {
        const phone_number = this.normalizePhone(event.target.value)
        this.setState({phone:phone_number})
    }
    handleSubjectChange = (event) => {
        this.setState({subject:event.target.value})
    }
    handleMessageChange = (event) => {
        this.setState({message:event.target.value})
    }

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
                        <input value={this.state.name} type="text" onChange={this.handleNameChange} placeholder="Name" className="form-input" id="name" required/>
                    </div>
                    <div className="address-input input-div">
                        <label className="form-label" htmlFor="address"/>
                        <input value={this.state.address} type="text" onChange={this.handleAddressChange} placeholder="Address" className="form-input" id="address" required/>
                    </div>
                    <div className="email-input">
                        <label className="form-label" htmlFor="email"/>
                        <input value={this.state.email} type="email" onChange={this.handleEmailChange} placeholder="Email" className="form-input" id="email" required/>
                    </div>
                    <div className="phone-input">
                        <label className="form-label" htmlFor="phone"/>
                        <input value={this.state.phone} type="tel" pattern="[0=9]*" onChange={this.handlePhoneChange} placeholder="Phone" className="form-input" id="phone" required/>
                    </div>
                    <div className="subject-input">
                        <label className="form-label" htmlFor="subject"/>
                        <input value={this.state.subject} type="text" onChange={this.handleSubjectChange} placeholder="Subject" className="form-input" id="subject" required/>
                    </div>
                    <div className="message-input textarea-div">
                        <label className="form-label" htmlFor="message"/>
                        <textarea value={this.state.message} onChange={this.handleMessageChange} placeholder="Type your message here" className="form-input" id="message" required/>
                    </div>
                    <div className="submit-input input-div" onClick={this.sendContact}>
                        <label className="form-label" htmlFor="submit"/>
                        <button id="submit" type="button">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;