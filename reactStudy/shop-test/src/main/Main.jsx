import React, { Component, useState, useEffect } from 'react';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main(props) {


        return (
            <div>

            <Container className="mainContainer">

                <Row>
                    <Col >
                        <div className="card">
                            <a href='item.jsx'>
                                <img className="card-img-top" src='/img/bed.jpg' />
                                <div className="card-body">
                                    <h4 className="card-title">{props.itemNm}</h4>
                                    <p className="card-text">{props.itemDetail}</p>
                                    <h3 class="card-title text-danger">{props.stockNumber}</h3>
                                </div>
                            </a>
                        </div>
                    </Col>
                    
                </Row>

        </Container>
        </div>
            
        );
}


export default Main;