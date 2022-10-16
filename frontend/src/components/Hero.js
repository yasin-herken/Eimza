import React from 'react'
import {Link} from "react-router-dom"
const Hero = () => {
    
    return (
        <React.Fragment>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
                            <h1>Better Solutions For Your Business</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
                                <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle" /><span>Watch Video</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>{/* End Hero */}
        </React.Fragment>
    )
}

export default Hero