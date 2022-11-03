import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Eimza = () => {
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
                                <h3>E-İMZA NEDİR?</h3>
                                <p>
                                    5070 sayılı Elektronik İmza Kanunu’nda yer alan şekliyle elektronik imza; başka bir elektronik veriye eklenen veya elektronik veriyle mantıksal bağlantısı bulunan ve kimlik doğrulama amacıyla kullanılan elektronik veriyi tanımlar. Kişilerin, elle atılan imzada olduğu şekilde tek imzası yoktur; bunun yerine imzalamada kullanılan anahtarları vardır.
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> E-İMZA UYGULAMA ALANLARI<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                                5070 sayılı Elektronik İmza Kanunu’nda yer alan şekliyle elektronik imza; başka bir elektronik veriye eklenen veya elektronik veriyle mantıksal bağlantısı bulunan ve kimlik doğrulama amacıyla kullanılan elektronik veriyi tanımlar. Kişilerin, elle atılan imzada olduğu şekilde tek imzası yoktur; bunun yerine imzalamada kullanılan anahtarları vardır.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Başvurular<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Gerek kamusal gerekse ticari alandaki muhtemel elektronik imza uygulamaları arasında aşağıdakiler sayılabilir:
                                            </p>
                                            <p style={{ fontWeight: "bold" }}>Kamusal Alanda Başvurular</p>
                                            <ol>
                                                <p>Her türlü başvurular (ÖSS, KPSS, LES, pasaport vb)</p>
                                                <p>Kurumlar arası iletişim (Emniyet Müdürlükleri, Nüfus ve Vatandaşlık İşleri Müdürlükleri vb)</p>
                                                <p>Sosyal güvenlik uygulamaları</p>
                                                <p>Sağlık uygulamaları (Sağlık personeli – hastaneler – eczaneler)</p>
                                                <p>Vergi ödemeleri</p>
                                                <p>Elektronik oy verme işlemleri</p>
                                            </ol>
                                            <p style={{ fontWeight: "bold" }}>
                                                Ticari Alandaki Uygulamalar
                                            </p>
                                            <ol>
                                                <p>İnternet bankacılığı</p>
                                                <p>Sigortacılık işlemleri</p>
                                                <p>Kağıtsız ofisler</p>
                                                <p>e-Sözleşmeler</p>
                                                <p>e-Sipariş</p>
                                            </ol>
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

export default Eimza