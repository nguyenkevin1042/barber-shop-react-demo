import React from "react";

export default function Footer(){
    return(
        <div>
         <footer className="site-footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-12">
                                <h4 className="site-footer-title mb-4">Our Branches</h4>
                            </div>

                            <div className="col-lg-4 col-md-6 col-11">
                                <div className="site-footer-thumb">
                                    <strong className="mb-1">Grünberger</strong>

                                    <p>Grünberger Str. 31, 10245 Berlin, Germany</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-11">
                                <div className="site-footer-thumb">
                                    <strong className="mb-1">Behrenstraße</strong>

                                    <p>Behrenstraße 27, 10117 Berlin, Germany</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-11">
                                <strong className="mb-1">Weinbergsweg</strong>

                                <p>Weinbergsweg 23, 10119 Berlin, Germany</p>
                            </div>
                        </div>
                    </div>

                    <div className="site-footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-lg-8 col-12 mt-4">
                                    <p className="copyright-text mb-0">Copyright © 2036 Barber Shop 
                                    - Design: <a href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a></p>
                                </div>

                                <div className="col-lg-2 col-md-3 col-3 mt-lg-4 ms-auto">
                                    <a href="#section_1" className="back-top-icon smoothscroll" title="Back Top">
                                        <i className="bi-arrow-up-circle"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}    
