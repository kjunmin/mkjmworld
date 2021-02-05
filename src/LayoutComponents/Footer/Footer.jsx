import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../NavBar/Logo';

function FooterComponent() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-container">
                    <Logo />
                </div>
                <h1>MKJMWorld</h1>
                <h4>© Copyright 2021</h4>
            </div>
            <div className="footer-content">
                <h3>Projects</h3>
                <Link className="footer-link-item" to={'/licence'}>Licence</Link>
                <Link className="footer-link-item" to={'/privacy'}>Privacy</Link>
                <Link className="footer-link-item" to={'/contact'}>Contact</Link>
            </div>
            <div className="footer-content">
                <h4 className="footer-text-container">A project by</h4>
                <h4 className="footer-text-container">Matthew Koh</h4>
            </div>
        </div>
    )
}

export default FooterComponent;