import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';
import './css-component/Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <div className='profile-pic'>
                        <Image src='assets/meDr.jpg'  className='profile-pic' rounded/>
                        <h3>Thomas Erickson</h3>
                        <p>Software Developer</p>
                    </div>
                    <Jumbotron>
                        <h2>Welcome!</h2>
                            <p>Learning how to build a site from scratch</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                    </Jumbotron>
                </Grid>
                <Panel className='coding-work' bsStyle='primary'>
                    <Panel.Body>
                        <Row>
                            <Col xs={6}>
                                <a href='https://github.com/erickstm87' target="_blank">
                                    <Image responsive src='assets/github.png' style={{'padding-left': '50px'}}/>
                                </a>
                            </Col>
                            <Col xs={6}>
                                <a href="mailto:erickstm717@gmail.com">
                                    <Image responsive src='assets/email.png'/>
                                </a>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}