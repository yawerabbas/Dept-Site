import React from 'react'
import {  Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="/anavbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/Research">Research</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/Achievements">Laboratories</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/AcademicProgramms">Academic Programms[UG]</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/AcademicProgrammsPG">Academic Programms[PG]</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/Faculty">Faculty</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/Students">Student</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link active" aria-current="page" to="/Events">Contact</Link>
                            </li>
                            
                            
                            
                        </ul>
                        
                    </div>
                    
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar