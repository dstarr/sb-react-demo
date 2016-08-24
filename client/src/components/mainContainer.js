import React from 'react';

import Header from './header';
import Navigation from './navigation';
import Body from './body';

export default class MainContainer extends React.Component {

  render = () => {

    return (
      <div>

        <Header text="The Finest Coffee on Earth" />
        <Navigation navItemCallback={this.handleNav} />
        <Body images={this.getPageImages()} />



      </div>
    );
  };

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

      default:
        alert('SELECTED NAV ITEM ' + itemId);
    }
  };

  getPageImages = () => {
    return [
      {
        path: './images/band1.jpg',
        link: 'http://www.starbucks.com/promo/tea'
      },
      {
        path: './images/band2.png',
        link: 'http://www.starbucks.com/coffeehouse/'
      },
      {
        path: './images/footer.png',
        link: '#'
      }
    ];
  };

}

