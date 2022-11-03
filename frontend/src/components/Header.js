import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
const Header = () => {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])
    return (
        <React.Fragment>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><Link to="/">E İmza</Link></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <Link to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active" to={location.pathname === "/" ? "#hero" : "/"}>Ana Sayfa</Link></li>
                            <li><Link className="nav-link scrollto" to={location.pathname === "/" ? "#about" : "/"}>Hakkımızda</Link></li>
                            <li><Link className="nav-link scrollto" to={location.pathname === "/" ? "#services" : "/"}>Servisler</Link></li>
                            <li><Link className="nav-link scrollto" to={location.pathname === "/" ? "#pricing" : "/"}>Ücretlendirme</Link></li>
                            <li class="dropdown"><Link to="#"><span>Bilgi</span> <i class="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="/eimza">E-İmza Nedir</Link></li>
                                    <li><Link to="/kep">Kep Nedir</Link></li>
                                    <li><Link to="/efatura">E-Fatura Nedir</Link></li>
                                    <li><Link to="/portal">GİB(Portal)</Link></li>
                                    <li><Link to="/entegrator">Entegratör</Link></li>
                                    <li><Link to="/eserbest">E-Serbest</Link></li>
                                </ul>
                            </li>
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