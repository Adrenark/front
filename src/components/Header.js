import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import aligtyt2 from '../images/aligtyt.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">
                <a className="navbar-brand tytul" href="#"><Link to="/" class="navbar-brand"><img src={aligtyt2} alt="Bootstrap" width="40" height="40"/></Link></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-auto naglowki bg-gradient">
                        <li className="nav-item ">
                            <Link to="/" class="nav-link active ">Strona główna</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Players" class="nav-link active ">Zawodnicy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" class="nav-link active ">O Nas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" class="nav-link active ">Kontakt</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/Protocols" class="nav-link active">Protokoły</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;