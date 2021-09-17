import React, { Component } from 'react';
import Slider from '../inc/Slider';
import Mv from '../pages/includes/Mv';
import Footer from '../inc/Footer';

function Home() {
    return (
        <div>
            <Slider/>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Family White Water Rafting Trip</h4>
                            <div className="underline mb-3"></div>
                            <p>
                            Our guide,  Chris, was *fantastic.* He was super friendly, knew the river and the  history of the area ridiculously well, and made running the rapids super  smooth (of course, this included the calculated runs into the smooth  boulders to spin the boat around, and diving us headfirst into the big  waves in the rapids to get us all wet, "surfing" as much as we could  that also involved getting completely soaked - it was great!). We  stopped wherever we could - jumped off ~10-foot rocks (at two different  spots!), sat in the warm "Queen's bath", picked blackberries.
                            </p>
                            <p>
                            Our guide,  Chris, was *fantastic.* He was super friendly, knew the river and the  history of the area ridiculously well, and made running the rapids super  smooth (of course, this included the calculated runs into the smooth  boulders to spin the boat around, and diving us headfirst into the big  waves in the rapids to get us all wet, "surfing" as much as we could  that also involved getting completely soaked - it was great!). We  stopped wherever we could - jumped off ~10-foot rocks (at two different  spots!), sat in the warm "Queen's bath", picked blackberries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Mv/>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Services</h4>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Fun Facts</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>
                                    Our guide, Chris, was *fantastic.* He was super friendly, knew the river and the  history of the area ridiculously well.
                                    and made running the rapids super  smooth (of course, this included the calculated runs into the smooth.
                                    </p>
                                </div>
                            </div>
                         </div>

                         <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Great Times</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>
                                    Our guide, Chris, was *fantastic.* He was super friendly, knew the river and the  history of the area ridiculously well.
                                    and made running the rapids super  smooth (of course, this included the calculated runs into the smooth.
                                    </p>
                                </div>
                            </div>
                         </div>

                         <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>True Story</h6>
                                    <div className="sub-underline mb-3"></div>
                                    <p>
                                    Our guide, Chris, was *fantastic.* He was super friendly, knew the river and the  history of the area ridiculously well.
                                    and made running the rapids super  smooth (of course, this included the calculated runs into the smooth.
                                    </p>
                                </div>
                            </div>
                         </div>

                    </div>
                </div>
            </section>

             <Footer/>

        </div>
    )
}

export default Home
