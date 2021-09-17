import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                            <hr />
                            <p>
                                    Our guide, Chris, was *fantastic.* He was super friendly, knew the river and the  history of the area ridiculously well.
                                    and made running the rapids super  smooth (of course, this included the calculated runs into the smooth.
                            </p>
                    </div>

                    <div className="col-md-4">
                        <h6>Quick links</h6>
                            <hr />
                            <div><Link to ="/" className="text-decoration-none text-white">Home</Link></div>
                            <div><Link to ="/" className="text-decoration-none text-white">About Us</Link></div>
                            <div><Link to ="/" className="text-decoration-none text-white">Contact Us</Link></div>
                            <div><Link to ="/" className="text-decoration-none text-white">Blog</Link></div>
                    </div>

                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                            <hr />
                            <div><p>Wilmington Delaware</p></div>
                            <div><p>302-987-4657</p></div>
                            <div><p>302-123-0987</p></div>
                            <div><p>company@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Footer