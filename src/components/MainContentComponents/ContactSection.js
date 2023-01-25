import React from "react";

export default function ContactSection(){
    return(
        <div>
         <section className="contact-section" id="section_5">
                    <div className="section-padding section-bg">
                        <div className="container">
                            <div className="row">   

                                <div className="col-lg-8 col-12 mx-auto">
                                    <h2 className="text-center">Say hello</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-padding">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 col-12">
                                    <h5 className="mb-3"><strong>Contact</strong> Information</h5>

                                    <p className="text-white d-flex mb-1">
                                        <a href="tel: 120-240-3600" className="site-footer-link">
                                            (+49) 
                                            120-240-3600
                                        </a>
                                    </p>

                                    <p className="text-white d-flex">
                                        <a href="mailto:info@yourgmail.com" className="site-footer-link">
                                            hello@barber.beauty
                                        </a>
                                    </p>

                                    <ul className="social-icon">
                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-facebook">
                                            </a>
                                        </li>
            
                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-twitter">
                                            </a>
                                        </li>
            
                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-instagram">
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-youtube">
                                            </a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-whatsapp">
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-5 col-12 contact-block-wrap mt-5 mt-lg-0 pt-4 pt-lg-0 mx-auto">
                                    <div className="contact-block">
                                        <h6 className="mb-0">
                                            <i className="custom-icon bi-shop me-3"></i>

                                            <strong>Open Daily</strong>

                                            <span className="ms-auto">10:00 AM - 8:00 PM</span>
                                        </h6>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-12 mx-auto mt-5 pt-5">
                                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7702.122299518348!2d13.396786616231472!3d52.531268574169616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85180d9075183%3A0xbba8c62c3dc41a7d!2sBarbabella%20Barbershop!5e1!3m2!1sen!2sth!4v1673886261201!5m2!1sen!2sth" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}    
