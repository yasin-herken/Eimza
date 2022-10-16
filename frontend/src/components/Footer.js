import React from 'react'
import {Link} from "react-router-dom"
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
                                    <li><i className="bx bx-chevron-right" /> <Link to="#hero">Ana Sayfa</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#about">Hakkımızda</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#services">Servisler</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#pricing">Ücretlendirme</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#contact">İletişim</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Teknik Destek</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#">Hafta içi 09:00 - 18:00</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#">Cumartesi günleri 09:00 - 17:00</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#">Telefon: +90 530 896 18 03</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Servislerimiz</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#">E-İmza</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#">E-Fatura</Link></li>
                                    <li><i className="bx bx-chevron-right" /> <Link to="#">KEP (Kayıtlı Elektronik Posta)</Link></li>
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