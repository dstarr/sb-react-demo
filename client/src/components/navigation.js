import React from 'react';
import { Navbar, MenuItem, Nav, NavItem, NavDropdownß} from 'react-bootstrap';


export default class Navigation extends React.Component {

  static propTypes = {
    navItemCallback: React.PropTypes.func.isRequired
  };


  render = () => {
    return (

        <Navbar.Collapse style={{  backgroundColor:'#0E4D30', margin:0, padding:0 }}>
          <Nav bsStyle="tabs" onSelect={this.props.navItemCallback} className="tabLinkColor">

            <NavItem eventKey={1} href="#">COFFEE</NavItem>
            <NavItem eventKey={2} href="#">TEA</NavItem>
            <NavItem eventKey='menu' href="#">MENU</NavItem>
            <NavItem eventKey='coffeehouse' href="#">COFFEEHOUSE</NavItem>
            <NavItem eventKey='responsibility' href="#">RESPONSIBILITY</NavItem>
            <NavItem eventKey={6} href="#">CARD</NavItem>
            <NavItem eventKey='blog' href="#">BLOG</NavItem>


            <NavDropdown eventKey={9} title="SHOP" id="basic-nav-dropdown">
              <MenuItem eventKey={9.1}>COFFEE</MenuItem>
              <MenuItem eventKey={9.2}>TEA</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={'COFFEE MACHINES'}>COFFEE MACHINES</MenuItem>
              <MenuItem eventKey={9.4}>COFFEE CUPS</MenuItem>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
    );
  }
}
