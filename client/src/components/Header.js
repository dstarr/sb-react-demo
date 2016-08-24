import React from 'react';
import {Grid, Row, Col, Image } from 'react-bootstrap';

export default class Header extends React.Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired
  };

  render = () => {

    return (
      <div>
          <Grid fluid={true} >
            <Row className="show-grid">
              <Col xs={1} md={1} lg={1}>
                <Image bsClass="img" src="../images/sblogo.png" style={{left: 20,margin:20,width:60}}/>
              </Col>

              <Col xs={9} md={9} lg={9}>
                <h2 style={{marginTop:30, color:'#FFFFFF'}}>

                  {this.props.text}

                </h2>
              </Col>
              
            </Row>
          </Grid>
      </div>
    );
  }
}