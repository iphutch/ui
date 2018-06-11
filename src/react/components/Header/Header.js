import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faTerminal from "@fortawesome/fontawesome-free-solid/faTerminal";
import { Link, withRouter } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink
} from "reactstrap";

//import { ModalLogin } from "../Modal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModalLogin: false
    };
    //this.handleToggleModalLogin = this.handleToggleModalLogin.bind(this);
  }

  /*
  handleToggleModalLogin() {
    this.setState({
      isOpenModalLogin: !this.state.isOpenModalLogin
    });
  }
  */

  render() {
    return (
      <header>
        <div className="container">
          <Navbar color="faded" expand="md" className="row">
            <NavbarBrand tag={Link} to={{ pathname: "/", state: "createNew" }}>
              <img alt="logo" className="logo" src="/img/logo-black-bg.png" />
            </NavbarBrand>
            <Collapse navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/" className="header-nav-button">
                    <FontAwesomeIcon
                      icon={faTerminal}
                      className="header-nav-button-icon"
                    />
                    Commands
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink
                    href="https://twitter.com/kommandr_com"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default withRouter(Header);
