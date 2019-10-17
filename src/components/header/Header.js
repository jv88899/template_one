import React, { Component } from 'react'
import Nav from '../nav/Nav'
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
                <Nav />
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