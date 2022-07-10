import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class NavbarComponent extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item>
          <h1> React</h1>
        </Menu.Item>
        <Menu.Item>
          <Link to="/account0">Account 0</Link>
        </Menu.Item>     
        <Menu.Item>
          <Link to="/account1">Account 1</Link>
        </Menu.Item>  
        <Menu.Item>
          <Link to="/account2">Account 2</Link>
        </Menu.Item> 
      </Menu>
    );
  }
}

export default NavbarComponent;
