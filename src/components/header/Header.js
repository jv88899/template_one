import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    state = {
        navLinksVisible: false
    }

    handleMenuClick = () => {
        this.setState({ navLinksVisible: !this.state.navLinksVisible })
    }

    render() {
        let navLinksClass = 'header__links__list'
        this.state.navLinksVisible ? navLinksClass = 'header__links__list visible' : navLinksClass = 'header__links__list'

        return (
            <header className="header">
                <nav className="header__nav">
                    <div className="header__nav__wrapper">
                        <div className="header__logo">
                            <div className="header__logo__img">
                                <p>&#60; &#47; &#62;</p>
                            </div>
                            <div className="header__logo__text">
                                <span>JVO</span>
                                <span
                                    className="header__logo__text__hidden"
                                >
                                    Javascript Developer
                                </span>
                            </div>
                        </div>
                        <div className="header__links">
                            <ul className={navLinksClass}>
                                <li>About</li>
                                <li>Portfolio</li>
                                <li>Testimonials</li>
                                <li>Contact</li>
                                <li className="header__links__hire">Hire Me!</li>
                            </ul>
                        </div>
                        <div
                            className="header__menu"
                            onClick={this.handleMenuClick}
                        >
                            <div className="header__menu__bar"></div>
                            <div className="header__menu__bar"></div>
                            <div className="header__menu__bar"></div>
                        </div>
                    </div>
                </nav>
                <div className="header__information">
                    <h1>Hi! I'm Jeremy.</h1>
                    <h2>I make websites that help organizations and businesses grow.</h2>
                    <a
                        href="/"
                        className="header__portfolio__button"
                    >
                        View Portfolio
                    </a>
                    <a
                        href="/"
                        className="header__contact__button"
                    >
                        Contact Me
                    </a>
                </div>
            </header>
        )
    }
}

export default Header