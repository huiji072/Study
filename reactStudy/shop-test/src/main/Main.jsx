import React, { Component } from 'react';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component {
    render() {
        return (
            <div>

            <Container className="container">
            
            <Row>

                <Col >
                    <div className="card">
                        <a href='item.jsx'>
                            <img className="card-img-top" src='img/bed.jpg' />
                            <div className="card-body">
                                <h4 className="card-title">itemName</h4>
                                <p className="card-text">itemDetail</p>
                                <h3 class="card-title text-danger">itemCount</h3>
                            </div>
                        </a>
                    </div>
                </Col>

                <Col >
                    <div className="card">
                        <a href='item.jsx'>
                            <img className="card-img-top" src='img/sopa.jpg' />
                            <div className="card-body">
                                <h4 className="card-title">itemName</h4>
                                <p className="card-text">itemDetail</p>
                                <h3 class="card-title text-danger">itemCount</h3>
                            </div>
                        </a>
                    </div>
                </Col>

                <Col >
                    <div className="card">
                        <a className='item.jsx'>
                            <img className="card-img-top" src='img/table.jpg' />
                            <div className="card-body">
                                <h4 className="card-title">itemName</h4>
                                <p className="card-text">itemDetail</p>
                                <h3 class="card-title text-danger">itemCount</h3>
                            </div>
                        </a>
                    </div>
                </Col>

            </Row>

            <Row>

                <Col className="col-md-4 margin">
                    <div className="card">
                        <a href='item.jsx'>
                            <img className="card-img-top" src='img/bed.jpg' />
                            <div className="card-body">
                                <h4 className="card-title">itemName</h4>
                                <p className="card-text">itemDetail</p>
                                <h3 class="card-title text-danger">itemCount</h3>
                            </div>
                        </a>
                    </div>
                </Col>

                <Col className="col-md-4 margin">
                    <div className="card">
                        <a href='item.jsx'>
                            <img className="card-img-top" src='img/sopa.jpg' />
                            <div className="card-body">
                                <h4 className="card-title">itemName</h4>
                                <p className="card-text">itemDetail</p>
                                <h3 class="card-title text-danger">itemCount</h3>
                            </div>
                        </a>
                    </div>
                </Col>

                <Col className="col-md-4 margin">
                    <div className="card">
                        <a className='item.jsx'>
                            <img className="card-img-top" src='img/table.jpg' />
                            <div className="card-body">
                                <h4 className="card-title">itemName</h4>
                                <p className="card-text">itemDetail</p>
                                <h3 class="card-title text-danger">itemCount</h3>
                            </div>
                        </a>
                    </div>
                </Col>

                </Row>
        
        </Container>
        </div>
            
        );
    }
}

export default Main;