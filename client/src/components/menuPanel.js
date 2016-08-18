import React from 'react';
import {Button, Image} from 'react-bootstrap';

export default class MenuModal extends React.Component {

  static propTypes = {
    show : React.PropTypes.bool.isRequired,
    close: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };


  render = () => {

    const imageStyle = {
      padding        : 0,
      margin         : 0,
      border         : 0,
      width          : '100%',
      left: 0,
      top:0
    };

    return (
      <div className="panel" hidden={!this.props.show}>

        <Image bsClass="img" src={this.props.image} style={imageStyle} responsive/>

        <Button bsStyle="link" className="btn close-button link" onClick={this.props.close}>CLOSE</Button>

      </div>
    );
  }
}