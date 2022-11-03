import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Entegrator = () => {
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
                                <h3>Özel Entegratör (Portal, Konnektör, Web Servis)</h3>
                                <p>
                                    Gelir İdaresi Başkanlığı tarafından yetki ve izin almış Özel Entegratörler aracılığıyla e-Fatura geçişi sağlanabilir. Özel Entegratörler’in de Portal, Konnektör ve Entegrasyon olmak üzere 3 ayrı yöntemi vardır.
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Portal<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                                Yılda en fazla 6000 adet gelen/giden fatura adedine sahip mükelleflerin kullanabileceği yöntemdir.
                                                Mükellefin kullandığı muhasebe programının (ERP) önemi yoktur. Faturalar manuel oluşturulup kesilerek, muhasebe programına da yine manuel olarak işlenir.
                                                .
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Konnektör<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                : Muhasebe programında yer alan alanlar doğrultusunda sorgular (kodlar) yazılarak elde edilen ara bir yazılımdır.
                                                Muhasebe programlarıyla uyumlu çalışabildikleri gibi içerisinde yer alan Fatura Oluşturma alanından da kolaylıkla faturalar oluşturulmasını sağlayarak bağımsız da çalışabilmektedir. Muhasebe programında verilerin çekilmesini sağlayarak faturaların tekli veya toplu gönderimini gerçekleştirir.

                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Entegrasyon <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Muhasebe programlarıyla gerekli yazılımsal süreç (Entegrasyon) tamamlandıktan sonra muhasebe programının içerisinden fatura gönderilebilen yöntemdir.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
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

export default Entegrator