import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="index.html">E İmza</a></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Ana Sayfa</a></li>
                            <li><a className="nav-link scrollto" href="#about">Hakkımızda</a></li>
                            <li><a className="nav-link scrollto" href="#services">Servisler</a></li>
                            <li><a className="nav-link scrollto" href="#pricing">Ücretlendirme</a></li>
                            <li><a className="nav-link scrollto" href="#contact">İletişim</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header