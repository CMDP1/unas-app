import React from 'react';
import { Link } from 'react-router-dom'
import '../css/nav.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="nav-link active" aria-current="page" to="/"><i id='home' className="bi bi-house-door-fill"></i></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/citas">Citas</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
