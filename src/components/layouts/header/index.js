import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Logo from 'src/assets/svgs/logo_cht.svg';

import './style.scss';

class Header extends PureComponent {
  state = {
    isOpenMenu: false,
  };

  handleToggleMenu = () => {
    this.setState(oldState => ({
      isOpenMenu: !oldState.isOpenMenu,
    }));
  };

  render() {
    const { isOpenMenu } = this.state;
    const { siteTitle } = this.props;
    return (
      <header id="main_header" className="header__steenify transition-fade">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <h1 className="sr-only">{siteTitle}</h1>
              <Link to="/" title={siteTitle}>
                <Logo />
              </Link>

              <button
                type="button"
                onClick={this.handleToggleMenu}
                className={`hamburger hamburger--slider d-block d-sm-none d-md-none d-lg-none ${
                  isOpenMenu ? 'is-active' : ''
                }`}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </button>
            </div>
            <nav className={`header__nav text-right ${isOpenMenu ? 'is-open' : ''}`}>
              <div className="header__overlay" />
              <Link to="/tracking" className="steenify_btn steenify_btn__secondary header__btn">
                ORDER TRACKING
              </Link>

              <ul className="header__menu d-sm-none d-md-none d-lg-none">
                <li className="header__item">
                  <a href="#sign-up" title="header menu item" className="header__link">
                    Orders
                  </a>
                </li>
                <li className="header__item">
                  <a href="#pricing" title="header menu item" className="header__link">
                    Pricing
                  </a>
                </li>
                <li className="header__item">
                  <a href="#contact" title="header menu item" className="header__link">
                    Contact
                  </a>
                </li>
                <li className="header__item">
                  <a href="#sign-up" title="header menu item" className="header__link">
                    Sign Up
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
