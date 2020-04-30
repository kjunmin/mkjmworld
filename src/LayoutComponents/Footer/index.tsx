import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/styles.scss';


function FooterComponent() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-text-container">What is a PWA?</h3>
                    <p className="footer-text-container">A Progressive web app</p>
                </div>
                <div className="footer-column">
                    <h3 className="footer-text-container">Projects</h3>
                    <div className="footer-link-container">
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/projects/sorting'}>Sorting</Link>
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/projects/fose'}>Rose Function</Link>
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/projects/fourier'}>Fourier Series</Link>
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/projects/poptimization'}>Portfolio Optimization</Link>
                    </div>
                </div>
                <div className="footer-column">
                    <h3 className="footer-text-container">Links</h3>
                    <div className="footer-link-container">
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/'}>Homepage</Link>
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/projects/about'}>About Us</Link>
                        <Link className="footer-link-item" to={process.env.PUBLIC_URL + '/projects'}>Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;