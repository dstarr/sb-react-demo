import React from 'react';
import { Link, Image } from 'react-bootstrap';

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

    var imageItems = this.props.images.map((image) => {
        return (
          <div style={bandStyle} key={imgCount++}>
            <a href={image.link} ><Image bsClass="img" src={image.path} width="100%" responsive/></a>
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
