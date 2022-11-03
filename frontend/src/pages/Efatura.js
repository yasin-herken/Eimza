import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Efatura = () => {
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
                                <h3>E-FATURE NEDİR?</h3>
                                <p>
                                    Vergi Usul Kanunu gereği bir faturada bulunması gereken tüm bilgileri barındıran kağıt fatura ile aynı hukuki niteliğe sahip elektronik belgedir.e-Fatura Kapsamı 2014 yılı ve devam eden yıllarda brüt satış hasılatı 10 milyon TL ve üzeri olan mükellefler, bir sonraki yıl hesap döneminin başından itibaren e-Fatura uygulamasına geçmelidir. 2016 yılı ve devam eden yıllarda mükellefiyet tesis ettirenler, mükellefiyet tesis ettirdikleri tarih ile izleyen hesap dönemi arasındaki sürenin üç aydan kısa olması halinde, izleyen hesap döneminden sonraki hesap dönemi başından itibaren e-Fatura uygulamasına tabi olurlar.
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> E-Fatura'nın Avantaj ve Üstünlükleri<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>Fatura maliyetini düşürür,</p>
                                            <p>Harcanan işgücünü azaltır,</p>
                                            <p>Fatura sürecini kısaltır, nakit akışını hızlandırır,</p>
                                            <p>Fatura baskı sürecinden kurtarır,</p>
                                            <p>Faturaları fiziksel koşullardan korur,</p>
                                            <p>Faturaların dijital ortamda güvenli, kolay ve hızlı bir şekilde gönderilmesini sağlar,</p>
                                            <p>Ticari fatura itiraz süreçlerini kolaylaştırır,</p>
                                            <p>Kağıt tasarrufu sayesinde de doğa dostu olarak, e-Dönüşüm’de hızınıza hız katar.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> e-Fatura (Elektronik Fatura) Mükelleflerinin Çalışabilecekleri Yöntemler<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                            <p>
                                                Mükelleflerin öncelikle Kamu Sertifikasyon Merkezi’nden (KamuSM) mali mühür başvurusu yapmaları gerekmektedir. Sonrasında ise aşağıdaki yöntemlerden birini seçerek elektronik ortamda fatura düzenlemeye başlayabilirler.
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

export default Efatura