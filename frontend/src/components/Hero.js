import React from 'react'
import { Link } from "react-router-dom"
const Hero = () => {

    return (
        <React.Fragment>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
                            <h1>Vizyonumuz</h1>
                            <h2 >Gelişen dijital çağda Türkiye’nin e-dönüşümle tanışmasına öncülük ederek çağımızın gereksinimlerini müşterilerimize aktarıyoruz.</h2>
                            <h1>Misyonumuz</h1>
                            <h2>Amacımız tüm Türkiye geneli e-dönüşüm sürecine katkı sunabilmektir.</h2>
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