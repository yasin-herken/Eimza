import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <React.Fragment>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><Link to="index.html">E İmza</Link></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <Link to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="#hero">Ana Sayfa</Link></li>
                            <li><Link className="nav-link scrollto" to="#about">Hakkımızda</Link></li>
                            <li><Link className="nav-link scrollto" to="#services">Servisler</Link></li>
                            <li><Link className="nav-link scrollto" to="#pricing">Ücretlendirme</Link></li>
                            <li><Link className="nav-link scrollto" to="#contact">İletişim</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header