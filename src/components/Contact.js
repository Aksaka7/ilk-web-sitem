import React, { useRef } from "react";

import emailjs from "emailjs-com";

import './Contact.css'

const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_r8vpj0a", "template_pifi5dn", form.current, "user_WhaTNUCTK5VoOhcdh0zjl")
            .then(res => {
                alert('Your message has been sent with Success.');
                window.location.reload();
            }, (err) => {
                console.log('Login Failed', err);
            });

    }

    return (

        <div id='contact' className='botom' >

            <div className='my-5' >
                <h1 className='text-center'> Contact Us </h1>
                <span className='line'></span>
            </div >

            <div className='container contact_div bota'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>

                        <form onSubmit={sendEmail} ref={form}>

                            <div className="mb-3">
                                <label for="name" className="form-label">FullName</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter your name" required />
                            </div>

                            <div className="mb-3">
                                <label for="user_phone" className="form-label">Phone</label>
                                <input type="number" className="form-control" name="user_phone" placeholder="mobile number" required />
                            </div>

                            <div className="mb-3">
                                <label for="user_email" className="form-label">E-mail address</label>
                                <input type="email" className="form-control" name="user_email" placeholder="name@example.com" required />
                            </div>

                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" name="message" rows="3" required></textarea>
                            </div>

                            <div className="col-12">
                                <button className=" btn btn-outline-primary" type="submit" value="send" > Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div >



        </div >
    );
}

export default Contact

