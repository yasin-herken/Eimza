import React from 'react'
import { Link } from "react-router-dom"
import 'reactjs-popup/dist/index.css';
import ControlledPopup from './Controlled';
const Main = () => {
    return (
        <React.Fragment>
            <main id="main">
                {/* ======= About Us Section ======= */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Hakkımızda</h2>
                        </div>
                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    Güvenilir ve deneyimli elektronik sertifika, e- imza hizmet sağlayıcısı olarak faaliyetlerimizi sürdürmekteyiz.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line" />Bilgi güvenliğinin elektronik ortamlarda da sürdürebilir olmasını sağlamaktayız.</li>
                                    <li><i className="ri-check-double-line" />Hem bireysel hem de kurumsal sertifika, elektronik imza hizmetlerimizle başarılı çalışmalar içerisinde yer almaktayız. </li>
                                    <li><i className="ri-check-double-line" />Birey ve kurumların, elektronik ortamlarda işini kolaylaştırmayı başaracak çözümler sunmaktayız.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Alt yapı ve test süreçlerinin üstesinden başarıyla gelerek, Bilgi Teknolojileri ve İletişim Kurumu tarafından onayı kabul görmüş bir hizmet sağlayıcısıyız.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line" /> Hızlı ve güvenilir üretim yapan, ESHS’ler arasında yer almanın gururunu yaşamaktayız.</li>
                                    <li><i className="ri-check-double-line" />Kanunların istediği şartları taşıyan, kurum ve kuruluşların proje çözümlemesine yardımcı olacak hizmetlere yer vermekteyiz.</li>
                                    <li><i className="ri-check-double-line" /> Teknolojiyi en doğru ve güvenli yoldan kullanılması amacıyla, güçlü alt yapı sistemleri oluşturmaktayız.</li>
                                </ul>
                                {/* <Link to="#" className="btn-learn-more">Learn More</Link> */}
                            </div>
                        </div>
                    </div>
                </section>{/* End About Us Section */}
                {/* ======= Skills Section ======= */}
                <section id="skills" className="skills">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="assets/img/skills.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay={100}>
                                <h3>Gerekli Teknolojiler</h3>
                                <div className="skills-content" style={{ marginLeft: "50px" }}>
                                    <h4>Akis Yönetici Paketleri</h4>
                                    <p className="fst-italic">
                                        <ul style={{ marginLeft: "60px" }}>
                                            <li style={{ listStyleType: "initial" }}><Link to="https://www.imza.group/wp-content/uploads/2015/12/AKIS-Yonetici-x64-2.5.zip">Akis Yönetici Windows 64-Bit</Link></li>
                                            <li style={{ listStyleType: "initial" }}><Link to="https://www.imza.group/wp-content/uploads/2015/12/AKIS-Yonetici-x86-2.5.zip">Akis Yönetici Windows 32-Bit</Link></li>
                                        </ul>
                                    </p>
                                    <h4>Java</h4>
                                    <p className='fts-italic'>
                                        <ul style={{ marginLeft: "60px" }}>
                                            <li style={{ listStyleType: "initial" }}><Link to="https://www.imza.group/wp-content/uploads/2015/12/jre-8u171-windows-i586.exe">Java JRE 8 Update 171</Link></li>
                                        </ul>
                                    </p>
                                    <h4>Uzak Masaüstü Programı</h4>
                                    <p className='fts-italic'>
                                        <ul style={{ marginLeft: "60px" }}>
                                            <li style={{ listStyleType: "initial" }}><Link to="https://www.imza.group/wp-content/uploads/2015/12/AnyDesk.exe">Any Desk</Link></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Skills Section */}
                {/* ======= Services Section ======= */}
                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Servisler</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble" /></div>
                                    <h4><Link to="#">Aktivasyon/ Bloke Kaldırma</Link></h4>
                                    <p>Yukarıdaki resme tıklayarak indirilecek uygulamamız sayesinde şifrenizi aktif tutabilirsiniz.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file" /></div>
                                    <h4><Link to="#">Uzak Masaüstü Destek</Link></h4>
                                    <p>Kurulum ve Teknik Destek ile ilgili uzak masaüstü bağlantısı kurabilirsiniz</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={300}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer" /></div>
                                    <h4><Link to="#">Kampanyalarımız</Link></h4>
                                    <p>Sizin için oluşturulan kampanyalarımıza göz atabilir ve sizin için en uygun ürünü seçebilirsiniz</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay={400}>
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-layer" /></div>
                                    <h4><Link to="#">Teklif İsteyin</Link></h4>
                                    <p>Toplu alımlarınız için teklif formumuzu doldurun teklifimizi hızlı bir şekilde iletelim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Services Section */}
                {/* ======= Pricing Section ======= */}
                <section id="pricing" className="pricing">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Ücretlendirme</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3>1 Yıllık e-İmza</h3>
                                    <h4>395,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3>2 Yıllık e-İmza</h3>
                                    <h4>489,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3>3 Yıllık e-İmza</h3>
                                    <h4>589,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>


                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3><strong>Avukatlara Özel</strong> 3 Yıllık e-İmza</h3>
                                    <h4>489,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3><strong>Bilirkişilere Özel</strong> 3 Yıllık e-İmza</h3>
                                    <h4>489,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3><strong>Serbest Muhasebeci ve Mali Müşavirlere Özel</strong> 3 Yıllık e-İmza</h3>
                                    <h4>489,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300} style={{ marginBottom: "16px" }}>
                                <div className="box">
                                    <h3>1 Yıllık Kep(Kayıtlı Elektronik Posta)</h3>
                                    <h4>325,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> 20 Gönderi</li>
                                        <li><i className="bx bx-check" /> 100 SMS</li>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                                <div className="box">
                                    <h3>2 Yıllık Kep(Kayıtlı Elektronik Posta)</h3>
                                    <h4>525,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> 20 Gönderi</li>
                                        <li><i className="bx bx-check" /> 100 SMS</li>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                                <div className="box">
                                    <h3>3 Yıllık Kep(Kayıtlı Elektronik Posta)</h3>
                                    <h4>725,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> 20 Gönderi</li>
                                        <li><i className="bx bx-check" /> 100 SMS</li>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Pricing Section */}

                {/* ======= Contact Section ======= */}
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>İLETİŞİM</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt" />
                                        <h4>Lokasyon:</h4>
                                        <p>Ankara Çankaya Aşağı Öveçler Mahallesi 1322 Cad. 77/15</p>
                                    </div>
                                    <div className="phone">
                                        <i className="bi bi-phone" />
                                        <h4>Telefon:</h4>
                                        <p>+90 530 896 18 03</p>
                                    </div>
                                    <iframe title='ankara' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.31868150564875!2d32.82416032793913!3d39.894417857026944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345f61e59a809%3A0x5d089800f720a7dd!2zQcWfYcSfxLEgw5Z2ZcOnbGVyLCAxMzIyLiBDZC4gTm86NzcgRDoxNSwgMDY0NjAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1sen!2str!4v1665919494028!5m2!1sen!2str" frameBorder={0} style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="#" className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Ad Soyad:</label>
                                            <input type="text" name="name" className="form-control" id="name" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">E-Posta Adresi:</label>
                                            <input type="email" className="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Telefon:</label>
                                        <input type="text" className="form-control" name="telephone" id="telephone" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Mesaj:</label>
                                        <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Yükleniyor</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Mesajınız gönderildi. Teşekkür Ederiz!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Gönder</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>{/* End Contact Section */}
            </main>{/* End #main */}
        </React.Fragment>
    )
}

export default Main