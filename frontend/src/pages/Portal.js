import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Portal = () => {
  return (
    <React.Fragment>
            <Header />
            <Hero />
            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                            <h3>GİB (Portal)</h3>
                                <p>
                                    e-Fatura mükellefleri, Gelir İdaresi Başkanlığı’nın (GİB) Portal uygulamasını ücretsiz olarak kullanarak e-Fatura düzenleyebilirler.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("assets/img/why-us.png")' }} data-aos="zoom-in" data-aos-delay={150}>&nbsp;</div>
                    </div>
                </div>
            </section>{/* End Why Us Section */}
            <Footer />
        </React.Fragment>
  )
}

export default Portal