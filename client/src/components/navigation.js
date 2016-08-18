import React from 'react';
import {Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import MenuPanel from './menuPanel';

export default class Navigation extends React.Component {

  constructor(...props) {

    super(...props);

    this.state = {
      showPanel: false,
      img      : './images/menuModal.png'
    };

  };

  static propTypes = {
    navItemCallback: React.PropTypes.func.isRequired
  };

  render = () => {

    return (
      <div>
        <Navbar.Collapse style={{  backgroundColor:'#0E4D30', margin:0, padding:0 }}>
          <Nav bsStyle="tabs" onSelect={this.handleNavItem} className="tabLinkColor">

            <NavItem eventKey='coffee' href="#">COFFEE</NavItem>
            <NavItem eventKey='tea' href="#">TEA</NavItem>
            <NavItem eventKey='menu' href="#">MENU</NavItem>
            <NavItem eventKey='coffeehouse' href="#">COFFEEHOUSE</NavItem>
            <NavItem eventKey='responsibility' href="#">RESPONSIBILITY</NavItem>
            <NavItem eventKey='card' href="#">CARD</NavItem>
            <NavItem eventKey='blog' href="#">BLOG</NavItem>


            <NavDropdown eventKey='shop' title="SHOP" id="basic-nav-dropdown">
              <MenuItem eventKey='coffee'>COFFEE</MenuItem>
              <MenuItem eventKey='tea'>TEA</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey='coffee-machines'>COFFEE MACHINES</MenuItem>
              <MenuItem eventKey='coffee-cups'>COFFEE CUPS</MenuItem>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

        <MenuPanel show={this.state.showPanel} image={this.state.img} close={this.closeMenu}/>

      </div>
    );
  };

  closeMenu = () => {
    this.setState({
      showPanel: false
    });
  };

  handleNavItem = (itemKey) => {

    if (itemKey === 'menu' || itemKey === 'coffee') {
      this.showDisplayPanel(itemKey);
      return;
    }

    if (this.state.showPanel) {
      this.closeMenu();
    }

    this.props.navItemCallback(itemKey);

  };

  showDisplayPanel = (itemKey) => {

    this.setState({
      showPanel: true,
      activeKey: this.props.navActiveKey
    });

    if (itemKey === 'menu') {
      this.setState({
        img: './images/menuModal.png'
      });
    }

    if (itemKey === 'coffee') {
      this.setState({
        img: './images/coffeePanel.png'
      });
    }
  };

}


