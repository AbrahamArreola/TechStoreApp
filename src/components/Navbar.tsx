import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink exact to="/index" className="navbar-brand">
                TechStore
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/index" className="nav-link">
                            Index
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/store/products" className="nav-link">
                            Store
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
