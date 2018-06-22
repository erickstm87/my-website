import React, {Component} from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './css-component/About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src='assets/robot.png' className='header-image' />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src='assets/escalante' className='about-profile-pic' rounded/>
                        <h3>What I'm All About</h3>
                        <p>Original plan was to go to law school but decided I wanted to build things instead. Now I'm constantly picking up new projects to dive deeper and deeper down the rabbit hole of software development. I'm constantly amazed by the lack of specialty hardware needed to do whatever I want. After each project I'm just looking to pick up the next bigger and more impactful thing.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}