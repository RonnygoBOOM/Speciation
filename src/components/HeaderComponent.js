import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container nav-dark">
                        <NavbarBrand className="mr-auto App-logo" href="/"><img src="/logo192.png" height="30" width="30" alt="Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/parallaxTextScroll">
                                        <i className="fa fa-angle-right fa-lg" /> Scroll Animation
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    };
}

export default Header;