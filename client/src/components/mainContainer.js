import React from 'react';

import Header from './header';
import Navigation from './navigation';
import Body from './body';
import MenuModal from './menuModal';

export default class MainContainer extends React.Component {

  constructor() {

    super();

    this.state = { showModal : false};

  }

  handleNav = (itemId) => {

    switch (itemId) {

      case 'responsibility':
        window.location.href = 'http://www.starbucks.com/responsibility';
        break;

      case 'coffeehouse':
        window.location.href = 'http://www.starbucks.com/coffeehouse';
        break;

      case 'blog':
        window.location.href = 'https://1912pike.com/';
        break;

      case 'menu':
        this.openMenu();
        break;

      default:
        alert('selected ' + itemId);
    }
  };

  closeMenu = () => {
    this.setState({ showModal: false });
  };

  openMenu = () => {
    this.setState({ showModal: true });
  };

  render = () => {

    const bodyImages = [
      {
        path: './images/band1.jpg',
        link : 'http://www.starbucks.com/promo/tea'
      },
      {
        path: './images/band2.png',
        link : 'http://www.starbucks.com/coffeehouse/mobile-order'
      }
    ];

    return (
      <div>

        <Header />
        <Navigation navItemCallback={this.handleNav}/>
        <MenuModal showModal={this.state.showModal} modalClose={this.closeMenu} />
        <Body images={bodyImages}/>

      </div>
    );
  }
}