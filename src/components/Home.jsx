import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <div className='profile-pic'>
                    <Image src='assets/meDr.jpg'  className='profile-pic' />
                    <h3>Thomas Michael Erickson</h3>
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
        )
    }
}