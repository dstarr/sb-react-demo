import React from 'react';
import {Panel, PanelGroup, Image, Well} from 'react-bootstrap';

export default class Body extends React.Component {

  static propTypes = {
    images: React.PropTypes.array.isRequired
  };


  render = () => {

    const bandStyle = {
      padding        : 0,
      margin         : 0,
      border         : 0,
      backgroundColor: '#000000',
      width          : '100%'
    };

    var imgCount = 0;

    var imageItems = this.props.images.map(function (image) {
        return (
          <div style={bandStyle} key={imgCount++}>
            <Image bsClass="img" src={image} width="100%"/>
          </div>
        );
      }
    );

    return (
      <div>
        { imageItems }
      </div>
    );
  }
}
