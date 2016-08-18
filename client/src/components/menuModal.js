import React from 'react';
import {Modal, Image} from 'react-bootstrap';

export default class MenuModal extends React.Component {

  static propTypes = {
    showModal : React.PropTypes.bool.isRequired,
    modalClose: React.PropTypes.func.isRequired
  };


  render = () => {

    const imageStyle = {
      padding        : 0,
      margin         : 0,
      border         : 0,
      backgroundColor: '#000000',
      width          : '100%'
    };

    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.modalClose} bsStyle="large">
          <Modal.Body>
            <div style={imageStyle}>
              <Image bsClass="img" src='./images/menuModal.png' width="100%" responsive/>
            </div>
          </Modal.Body>
        </Modal>
      </div>

    );
  }
}