import React from 'react'
import {Link} from "react-router-dom"
import 'reactjs-popup/dist/index.css';
import ControlledPopup from './Controlled';
const Main = () => {
    return (
        <React.Fragment>
            <main id="main">
                {/* ======= Cliens Section ======= */}
                <section id="cliens" className="cliens section-bg">
                    <div className="container">
                        <div className="row" data-aos="zoom-in">
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>{/* End Cliens Section */}
                {/* ======= About Us Section ======= */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Hakkımızda</h2>
                        </div>
                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="#" className="btn-learn-more">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </section>{/* End About Us Section */}
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
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="box">
                                    <h3>1 Yıllık e-İmza</h3>
                                    <h4>365,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <ControlledPopup />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
                                <div className="box featured">
                                    <h3>2 Yıllık e-İmza</h3>
                                    <h4>475,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <Link to="#" className="buy-btn">Hemen Başvuru</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                                <div className="box">
                                    <h3>3 Yıllık e-İmza</h3>
                                    <h4>565,00<sup>₺</sup> + KDV</h4>
                                    <ul>
                                        <li><i className="bx bx-check" /> Kart Okuyucu Dahil</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Kurulum</li>
                                        <li><i className="bx bx-check" /> Ücretsiz Teknik Destek</li>
                                    </ul>
                                    <Link to="#" className="buy-btn">Hemen Başvuru</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
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
                                    <Link to="#" className="buy-btn">Hemen Başvuru</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
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
                                    <Link to="#" className="buy-btn">Hemen Başvuru</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
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
                                    <Link to="#" className="buy-btn">Hemen Başvuru</Link>
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