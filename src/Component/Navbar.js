import React, { Component } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

function Navbar() {
    const matchPath = useRouteMatch();
    const navigate = useHistory()

    const handleLogout =()=>{
        navigate.push("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-style">
                <Link className="navbar-brand" to="/">Covid 19 Daily update status</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`/dashboard`}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${matchPath.path}/about`}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${matchPath.path}/contact`}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${matchPath.path}/help`}>Help</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link logout" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}


export default Navbar;
