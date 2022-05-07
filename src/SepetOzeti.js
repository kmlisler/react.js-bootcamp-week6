import React, { Component } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  Badge,
} from "reactstrap";
import {Link} from "react-router-dom";

export default class SepetOzeti extends Component {
  sepetOzeti() {
    return (
      <div>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Sepetiniz
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.sepet.map((sepetItem) => (
              <DropdownItem key={sepetItem.urun.id}>
                {sepetItem.urun.productName}
                <Badge color="success"> {sepetItem.quantity}</Badge>
                <Badge
                  color="danger"
                  onClick={() => this.props.sepettenCikar(sepetItem.urun)}
                >
                  X
                </Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>
              <Link to="sepet"> Sepete Git </Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
  render() {
    return (
      <div>{this.props.sepet.length > 0 ? this.sepetOzeti() : <div></div>}</div>
    );
  }
}
