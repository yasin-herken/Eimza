import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Kep = () => {
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
                                <h3>KEP (KAYITLI ELEKTRONİK POSTA) NEDİR?</h3>
                                <p>
                                    KEP(Kayıtlı Elektronik Posta), gönderici ve alıcının kimliklerinin belli olduğu, Gönderi zamanının, elektronik posta içeriğinin değiştirilemediği güvenli elektronik postadır.
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> KAYITLI ELEKTRONİK POSTA (KEP) KULLANIM AVANTAJLARI<i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                            <p>
                                                Yasal koruma sağlar
                                            </p>

                                            <p>KEP hizmet sağlayıcı kanıt olarak gösterilen ileti ile ilgili delilleri 20 yıl süreyle sağlar</p>
                                            <p>Teslim etme ve okunma garantisi sunar:</p>
                                            <p>Gönderinin orijinalliğini ve bütünlüğünü güvence altına alır, dışarıdan müdahaleyi önler.</p>
                                            <p>Gönderiye müdahaleyi önler:</p>
                                            <p>Elektronik olarak imza ve zaman damgası kullanımı ile sahteciliğin önüne geçer.</p>
                                            <p>Zaman kazandırır:</p>
                                            <p>Bilgi akışının hızlı ve güvenli ilerlemesini sağlar. Resmi ve ticari yazışmaların hızlanmasını sağlar.</p>
                                            <p>Kullanım kolaylığı sunar:</p>
                                            <p>Kurum ve bireyler, şahsen ulaştırılması gereken veya içeriğin bütünlüğünün korunmasını gerektiren işlemleri, Kayıtlı elektronik posta(KEP) adresi ile kolayca yapabilir.</p>
                                            <p>Maliyetleri düşürür:</p>
                                            <p>Kağıt kullanımı, arşivleme, posta ve işlem maliyetlerinin düşmesini sağlar.</p>
                                            <p>Çevrecidir.</p>
                                            <p>Kağıt kullanımı ortadan kaldırır. Çevrenin korunmasında katkı sağlar.  Kolaylıkla ulaşılabilir ve denetlenebilir.</p>

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

export default Kep