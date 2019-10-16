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
                            <li>Hire Me!</li>
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
                </nav>
            </header>
        )
    }
}

export default Header