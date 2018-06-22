import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './css-component/ReadingList.css'

export default class ReadingList extends Component {
    render() {
        return (
            <div>
                <Image src='assets/theMaster.jpg' className='header-read-image'/>
                <Grid>
                    <Row sm={1} className='reading-row'>

                    </Row>
                </Grid>
            </div>
        )
    }
}