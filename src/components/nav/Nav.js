import React, { Component } from 'react'

class Nav extends Component {
    state = {
        navLinksVisible: false
    }

    handleMenuClick = () => {
        this.setState({ navLinksVisible: !this.state.navLinksVisible })
    }

    render() {
        let navLinksClass = 'nav__links__list'
        this.state.navLinksVisible ? navLinksClass = 'nav__links__list visible' : navLinksClass = 'nav__links__list' 

        return (
            <nav className="nav">
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <div className="nav__logo__img">
                            <p>&#60; &#47; &#62;</p>
                        </div>
                        <div className="nav__logo__text">
                            <span>JVO</span>
                            <span
                                className="nav__logo__text__hidden"
                            >
                                Javascript Developer
                            </span>
                        </div>
                    </div>
                    <div className="nav__links">
                        <ul className={navLinksClass}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                            <li
                                className="nav__links__hire"
                            >
                                Hire Me!
                            </li>
                        </ul>
                    </div>
                    <div
                        className="nav__menu"
                        onClick={this.handleMenuClick}
                    >
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav