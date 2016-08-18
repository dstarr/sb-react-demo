import React from 'react';

import Header from './header';
import Navigation from './navigation';
import Body from './body';

export default class MainContainer extends React.Component {

  handleNav = (itemId) => {

    switch (itemId) {

      case 'responsibility':
        window.location.href = 'http://www.starbucks.com/responsibility';

      case 'coffeehouse':
        window.location.href = 'http://www.starbucks.com/coffeehouse';
        break;


      case 'blog':
        window.location.href = 'https://1912pike.com/';
        break;

      default:
        alert('selected ' + itemId);
    }


  }


  render = () => {

    const bodyImages = [
      './images/band1.jpg',
      './images/band2.png'
    ];

    return (
      <div>

        <Header />
        <Navigation navItemCallback={this.handleNav}/>
        <Body images={bodyImages}/>

      </div>
    );
  }
}

// navItemCallback={this.handleNav}