import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class NavbarComponent extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item>
          <h1> Accounts:</h1>
        </Menu.Item>
        <Menu.Item>
          <Link to="/456789">456789</Link>
        </Menu.Item>     
        <Menu.Item>
          <Link to="/945315">945315</Link>
        </Menu.Item>  
        <Menu.Item>
          <Link to="/9452-1553-2345-7654">9452-1553-2345-7654</Link>
        </Menu.Item> 
      </Menu>
    );
  }
}

export default NavbarComponent;
