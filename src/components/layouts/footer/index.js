import React from 'react';
import './style.scss';

const Footer = ({ className }) => (
  <footer id="main__footer" className={`footer footer__steenify transition-fade ${className}`}>
    <div className="container">
      <div className="footer__content">
        <div className="footer__copyright">
          Copyright ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          <a target="_blank" rel="noopener noreferrer" title="steenify" href="https://steenify.com">
            Steenify
          </a>
        </div>

        <ul className="footer__menu">
          <li className="footer__item">
            <a className="footer__link" href="/" title="Home">
              Home
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#pricing" title="The Pricing">
              Pricing
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#contact" title="Contact">
              Contact
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#signup" title="Sign Up">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
