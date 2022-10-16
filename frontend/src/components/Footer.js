import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>E-İMZA ALK GRUP</h3>
                                <p>
                                    Aşağı Öveçler Mahallesi <br />
                                    Ankara, Çankaya 06460<br />
                                    Türkiye <br /><br />
                                    <strong>Telefon:</strong> +90 530 896 18 03<br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Hızlı Menü</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <a href="#hero">Ana Sayfa</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#about">Hakkımızda</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#services">Servisler</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#pricing">Ücretlendirme</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#contact">İletişim</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Teknik Destek</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Hafta içi 09:00 - 18:00</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Cumartesi günleri 09:00 - 17:00</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">Telefon: +90 530 896 18 03</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Servislerimiz</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">E-İmza</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">E-Fatura</a></li>
                                    <li><i className="bx bx-chevron-right" /> <a href="#">KEP (Kayıtlı Elektronik Posta)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        Tüm Hakları Saklıdır © E-İMZA ALK-GROUP
                    </div>
                </div>
            </footer>{/* End Footer */}
        </React.Fragment>
    )
}

export default Footer