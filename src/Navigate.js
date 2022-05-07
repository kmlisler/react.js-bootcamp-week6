import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import SepetOzeti from "./SepetOzeti";
class Navigate extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" expand="md" light>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <SepetOzeti sepettenCikar = {this.props.sepettenCikar} sepet={this.props.sepet} />
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navigate;
