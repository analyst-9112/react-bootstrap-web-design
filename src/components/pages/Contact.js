import React from 'react'
import Mv from '../pages/includes/Mv';
import Footer from '../inc/Footer';

function Contact() {
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h2 className="text-white">Contact Us</h2>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">  
                        <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98189.91652225064!2d-75.59952495630739!3d39.72988095613286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c70f185c46af6f%3A0x8516da5077308c00!2sWilmington%2C%20DE!5e0!3m2!1sen!2sus!4v1631911170253!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h4>Send Your Ideas</h4>
                                        {/* <div className="underline mb-3"></div> */}
                                            <form>
                                                <label for="">Name</label>
                                                <input type="text" placeholder="Enter Your Name" class="form-control"/>
                                                <label for="">Email</label>
                                                <input type="text" placeholder="Enter Your Name" class="form-control"/>
                                                <label for="">Message</label>
                                                <textarea rows="3" className="form-control"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                        <Mv/>

            <Footer/>
        </div>
    )
}

export default Contact